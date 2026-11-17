/* DECK · Disc lamp ID6 · optional E86 GLB-derived shaded geometry.
   Version bis only: original lamps, gestures and stored settings are untouched.
   Source profiles: COMMANDE-001.glb green mesh 433 / red mesh 434. */
(function(){
'use strict';
const host=window.__deckBisHost;
const canvas=document.getElementById('deckBisLayer');
const bar=document.getElementById('deckBisBar');
const toggle=document.getElementById('deckBisToggle');
const show=document.getElementById('deckBisShow');
const heightInput=document.getElementById('deckBisHeight');
const resistanceInput=document.getElementById('deckBisResistance');
const blendInput=document.getElementById('deckBisBlend');
const status=document.getElementById('deckBisStatus');
if(!host||!canvas||!bar||!toggle||!show||!heightInput||!resistanceInput||!blendInput){return;}
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const state={enabled:false,available:false,height:180,resistance:100,blend:70,dirty:true,gl:null,error:''};
const GREEN=[[.768,.6728],[.777,.6701],[.784,.6665],[.792,.6620],[.799,.6569],[.805,.6510],[.811,.6444],[.816,.6373],[.820,.6297],[.824,.6217],[.826,.6133],[.828,.6048],[.829,.5961]];
const RED=[[.829,.5961],[.834,.5183],[.849,.4418],[.874,.3680],[.909,.2980],[.952,.2332],[1.003,.1746],[1.062,.1232],[1.127,.0799],[1.197,.0454],[1.271,.0203],[1.347,.0051],[1.425,0]];
const STORAGE='deck-lamp-disc-bis3d-v1';
try{
 const saved=JSON.parse(localStorage.getItem(STORAGE));
 if(saved&&typeof saved==='object'){
  if(typeof saved.enabled==='boolean')state.enabled=saved.enabled;
  // v2 promotes the requested 180 / 100 once, then keeps later user edits.
  if(saved.version===2){
   if(Number.isFinite(saved.height))state.height=clamp(saved.height,0,180);
   if(Number.isFinite(saved.resistance))state.resistance=clamp(saved.resistance,0,100);
   if(Number.isFinite(saved.blend))state.blend=clamp(saved.blend,0,100);
  }
 }
}catch(_){}
function save(){
 try{localStorage.setItem(STORAGE,JSON.stringify({version:2,enabled:state.enabled,height:state.height,resistance:state.resistance,blend:state.blend}));}catch(_){}
}
function sync(){
 toggle.textContent=state.enabled?'Lampe · Bis 3D':'Lampe · originale';
 toggle.setAttribute('aria-pressed',String(state.enabled));
 heightInput.value=String(state.height);resistanceInput.value=String(state.resistance);blendInput.value=String(state.blend);
 document.getElementById('deckBisHeightValue').textContent=state.height+' %';
 document.getElementById('deckBisResistanceValue').textContent=state.resistance+' %';
 document.getElementById('deckBisBlendValue').textContent=state.blend+' %';
 status.textContent=state.error?'WebGL : '+state.error:state.enabled?'Bis 3D · courbe lissée · vue en plan':'Lampe originale conservée';
 status.style.color=state.error?'#ffb1ad':'#a7bfd6';
 bar.hidden=!host.drawnLights.enabled;
}
function makeCurve(){
 const height=.6728*state.height/100;
 const width=.022+.178*state.resistance/100,inner=.829-width;
 const points=[[0,height],[inner,height]];
 for(const [r,z] of GREEN.slice(1))points.push([inner+(r-.768)/(.829-.768)*width,z*height/.6728]);
 for(const [r,z] of RED.slice(1))points.push([r,z*height/.6728]);
 points.push([1.55,0]);
 const n=points.length,delta=new Float32Array(n-1),slopes=new Float32Array(n);
 for(let i=0;i<n-1;i++)delta[i]=(points[i+1][1]-points[i][1])/(points[i+1][0]-points[i][0]);
 // Monotone cubic Hermite / PCHIP, C1 at every sampled source ring.
 for(let i=1;i<n-1;i++){
  if(delta[i-1]*delta[i]<=0)continue;
  const h0=points[i][0]-points[i-1][0],h1=points[i+1][0]-points[i][0];
  const a=2*h1+h0,b=h1+2*h0;
  slopes[i]=(a+b)/(a/delta[i-1]+b/delta[i]);
 }
 return {points,slopes};
}
function sample(curve,r){
 const p=curve.points,m=curve.slopes,n=p.length;
 if(r<=0)return p[0][1];
 if(r>=p[n-1][0])return 0;
 let lo=0,hi=n-1;
 while(hi-lo>1){const mid=(lo+hi)>>1;if(p[mid][0]<=r)lo=mid;else hi=mid;}
 const u=p[lo],v=p[hi],h=v[0]-u[0],t=(r-u[0])/h,s=t*t,z=s*t;
 return Math.max(0,(2*z-3*s+1)*u[1]+(z-2*s+t)*h*m[lo]+(-2*z+3*s)*v[1]+(z-s)*h*m[hi]);
}
function compile(gl,type,source){
 const sh=gl.createShader(type);
 gl.shaderSource(sh,source);gl.compileShader(sh);
 if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(sh)||'shader');
 return sh;
}
function initWebGL(){
 if(state.available&&state.gl)return true;
 try{
  const gl=canvas.getContext('webgl',{alpha:true,antialias:true,depth:false,premultipliedAlpha:false});
  if(!gl)throw new Error('indisponible');
  const vertex=[
  'attribute vec3 aPosition;',
  'attribute vec3 aNormal;',
  'attribute float aRadius;',
  'uniform vec2 uCentre,uViewport;',
  'uniform float uScale;',
  'varying vec3 vNormal;',
  'varying float vRadius;',
  'void main(){',
  'vec2 pos=uCentre+aPosition.xy*uScale;',
  'gl_Position=vec4(pos.x*2.0/uViewport.x-1.0,1.0-pos.y*2.0/uViewport.y,-aPosition.z*0.02,1.0);',
  'vNormal=aNormal;vRadius=aRadius;',
  '}'].join('\n');
  const fragment=[
  'precision mediump float;',
  'varying vec3 vNormal;',
  'varying float vRadius;',
  'uniform float uOpacity;',
  'uniform float uBlend;',
  'void main(){',
  'vec3 n=normalize(vNormal);',
  'float slope=length(n.xy);',
  'float incidence=dot(n.xy,normalize(vec2(-0.74,-0.67)));',
  'float lit=smoothstep(0.01,0.65,max(0.0,incidence));',
  'float shade=smoothstep(0.01,0.65,max(0.0,-incidence));',
  // Gently toned highlights/shadows (no opaque white material, no flat sticker).
  'vec3 lightTint=vec3(0.92,0.84,0.89);',
  'vec3 darkTint=vec3(0.12,0.20,0.34);',
  'vec3 tint=mix(lightTint,darkTint,shade/(lit+shade+0.001));',
  // Flat surface exactly transparent; outer edge feathers fully to 0 alpha.
  'float slopeMask=smoothstep(0.015,0.22,slope);',
  'float fringe=1.0-smoothstep(1.12,1.54,vRadius);',
  'float diffusion=mix(0.92,0.48,uBlend);',
  'float alpha=(0.12+0.72*max(lit,shade))*slopeMask*fringe*diffusion*uOpacity;',
  'gl_FragColor=vec4(tint,clamp(alpha,0.0,0.88));',
  '}'].join('\n');
  const program=gl.createProgram();
  gl.attachShader(program,compile(gl,gl.VERTEX_SHADER,vertex));
  gl.attachShader(program,compile(gl,gl.FRAGMENT_SHADER,fragment));
  gl.linkProgram(program);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program)||'liaison');
  const rows=208,cols=128,count=(rows+1)*(cols+1);
  const positions=new Float32Array(count*3),normals=new Float32Array(count*3),radii=new Float32Array(count);
  const indices=new Uint16Array(rows*cols*6);
  for(let i=0,k=0;i<rows;i++)for(let j=0;j<cols;j++){
   const a=i*(cols+1)+j,b=a+cols+1;
   indices[k++]=a;indices[k++]=b;indices[k++]=a+1;
   indices[k++]=a+1;indices[k++]=b;indices[k++]=b+1;
  }
  const buffers={position:gl.createBuffer(),normal:gl.createBuffer(),radius:gl.createBuffer(),indices:gl.createBuffer()};
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,buffers.indices);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,indices,gl.STATIC_DRAW);
  Object.assign(state,{gl,program,available:true,error:'',dirty:true,rows,cols,positions,normals,radii,indices,buffers,
   attrib:{position:gl.getAttribLocation(program,'aPosition'),normal:gl.getAttribLocation(program,'aNormal'),radius:gl.getAttribLocation(program,'aRadius')},
   uniform:{centre:gl.getUniformLocation(program,'uCentre'),viewport:gl.getUniformLocation(program,'uViewport'),scale:gl.getUniformLocation(program,'uScale'),opacity:gl.getUniformLocation(program,'uOpacity'),blend:gl.getUniformLocation(program,'uBlend')}});
  gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();state.available=false;state.error='contexte perdu';canvas.style.display='none';sync();});
  sync();
  return true;
 }catch(e){
  state.error=String(e.message||e).slice(0,150);state.available=false;
  canvas.style.display='none';sync();return false;
 }
}
function bind(name,data,size){
 const gl=state.gl,loc=state.attrib[name];
 gl.bindBuffer(gl.ARRAY_BUFFER,state.buffers[name]);
 gl.bufferData(gl.ARRAY_BUFFER,data,gl.DYNAMIC_DRAW);
 gl.enableVertexAttribArray(loc);
 gl.vertexAttribPointer(loc,size,gl.FLOAT,false,0,0);
}
function rebuild(){
 const curve=makeCurve(),rows=state.rows,cols=state.cols,eps=.013;
 for(let i=0;i<=rows;i++){
  const r=1.55*i/rows,z=sample(curve,r);
  const dr=r<eps?r+eps:2*eps;
  const slope=(sample(curve,r+eps)-sample(curve,Math.max(0,r-eps)))/dr;
  for(let j=0;j<=cols;j++){
   const t=j*2*Math.PI/cols,c=Math.cos(t),s=Math.sin(t),index=i*(cols+1)+j,k=index*3;
   const nx=-slope*c,ny=-slope*s,inv=1/Math.hypot(nx,ny,1);
   state.positions[k]=r*c;state.positions[k+1]=r*s;state.positions[k+2]=z;
   state.normals[k]=nx*inv;state.normals[k+1]=ny*inv;state.normals[k+2]=inv;
   state.radii[index]=r;
  }
 }
 state.dirty=false;
}
function render(){
 if(!host.drawnLights.enabled||!state.enabled){canvas.style.display='none';return;}
 if(!initWebGL()){canvas.style.display='none';return;}
 const lamps=host.drawnLights, lamp=lamps.draft?.id===6?lamps.draft:lamps.lamps[6];
 if(!lamp||!lamp.points||lamp.points.length<2||lamp.displayLevel<.002){
  canvas.style.display='none';return;
 }
 try{
  const gl=state.gl,density=Math.min(2,window.devicePixelRatio||1),w=host.w,h=host.h;
  const width=Math.max(1,Math.round(w*density)),height=Math.max(1,Math.round(h*density));
  if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
  canvas.style.width=w+'px';canvas.style.height=h+'px';
  gl.viewport(0,0,width,height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(state.program);
  if(state.dirty)rebuild();
  // WebGL attribute pointers are reset after every dynamic buffer update.
  bind('position',state.positions,3);
  bind('normal',state.normals,3);
  bind('radius',state.radii,1);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,state.buffers.indices);
  const p=lamp.points[0],delta=lamp.points[1];
  const target=Math.max(5,Math.hypot((delta.x-p.x)*w,(delta.y-p.y)*h));
  const age=lamps.time-(lamp.birth??p.t??-3);
  const expand=1-Math.exp(-Math.max(0,age)*3);
  gl.uniform2f(state.uniform.centre,p.x*w,p.y*h);
  gl.uniform2f(state.uniform.viewport,w,h);
  gl.uniform1f(state.uniform.scale,target*(.18+.82*expand)/.829);
  gl.uniform1f(state.uniform.opacity,clamp(lamp.displayLevel*1.6,0,1));
  gl.uniform1f(state.uniform.blend,state.blend/100);
  gl.drawElements(gl.TRIANGLES,state.indices.length,gl.UNSIGNED_SHORT,0);
  const code=gl.getError();if(code!==gl.NO_ERROR)throw new Error('code '+code);
  canvas.style.display='block';
 }catch(e){
  state.error=String(e.message||e).slice(0,150);state.available=false;
  canvas.style.display='none';sync();
 }
}
function setEnabled(value){
 state.enabled=!!value;
 if(state.enabled)initWebGL();
 sync();save();render();
}
toggle.addEventListener('click',()=>setEnabled(!state.enabled));
show.addEventListener('click',()=>{
 if(!host.drawnLights.enabled)host.setDrawnMode(true);
 const l=host.drawnLights.lamps[6];
 if(!l)host.drawnLights.lamps[6]=host.makeFixedDrawnDisc(6,host.w*.53,host.h*.46,.75);
 else if(l.level<=0){l.level=l.lastLevel||.75;l.displayLevel=l.level;}
 host.selectDrawnLight(6);host.saveDrawnLights();
 setEnabled(true);
});
for(const [field,input] of [['height',heightInput],['resistance',resistanceInput],['blend',blendInput]]){
 input.addEventListener('input',()=>{
  state[field]=Number(input.value);if(field!=='blend')state.dirty=true;
  sync();save();render();
 });
}
window.deckBisIsRendering=()=>state.enabled&&state.available;
window.deckBisRender=render;
window.deckBisUpdateUI=sync;
sync();
// Do not allocate a WebGL context when the original variant is selected.
// Migrate pre-max 150/50 stored settings exactly once; preserve opt-in state.
try{const value=JSON.parse(localStorage.getItem(STORAGE));if(value?.version!==2)save();}catch(_){save();}
if(state.enabled)initWebGL();
})();
