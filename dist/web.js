var o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var c=o((k,p)=>{var j={backgroundColor:"bc",borderRadius:"br",color:"c",positions:"p","positions.desktop":"d","positions.desktop.endX":"ex","positions.desktop.endY":"ey","positions.desktop.height":"h","positions.desktop.startX":"sx","positions.desktop.startY":"xy","positions.desktop.width":"w",fileId:"fId",fontWeight:"fw",icon:"i",placeholder:"ph",sitemapPageId:"spId",size:"s",state:"st",title:"t",textAlign:"ta",textDecoration:"td"};p.exports=j;p.exports.reverse=Object.fromEntries(Object.entries(j).map(([e,t])=>[t,e.split(".").pop()]))});var h=o((P,a)=>{var q={primary:0,surfaceVariant:1};a.exports=q;a.exports.reverse=Object.fromEntries(Object.entries(q).map(([e,t])=>[t,e]))});var v=o((_,f)=>{var E={500:5,600:6,700:7,800:8};f.exports=E;f.exports.reverse=Object.fromEntries(Object.entries(E).map(([e,t])=>[t,e]))});var w=o((ee,d)=>{var $={"System/union":0};d.exports=$;d.exports.reverse=Object.fromEntries(Object.entries($).map(([e,t])=>[t,e]))});var S=o((te,l)=>{var M={xs:9,s:10,m:20,l:30,xl:31};l.exports=M;l.exports.reverse=Object.fromEntries(Object.entries(M).map(([e,t])=>[t,e]))});var J=o((re,I)=>{I.exports={normal:"n"}});var z=o((se,m)=>{var N={left:0,center:1,right:2};m.exports=N;m.exports.reverse=Object.fromEntries(Object.entries(N).map(([e,t])=>[t,e]))});var V=o((ie,u)=>{var A={underline:0};u.exports=A;u.exports.reverse=Object.fromEntries(Object.entries(A).map(([e,t])=>[t,e]))});var g=o((oe,x)=>{var W={color:h(),fontWeight:v(),icon:w(),size:S(),state:J(),textAlign:z(),textDecoration:V()};x.exports=W;x.exports.reverse=Object.fromEntries(Object.entries(W).map(([e,t])=>[t,e]))});var O=o((ne,C)=>{C.exports={button:{backgroundColor:"black",borderRadius:0,state:"normal",icon:null},text:{size:"m",fontWeight:500,color:"#1f1f1f",textAlign:"left"},image:{opacity:1},input:{placeholder:"Search"}}});var Y=o((pe,X)=>{var D=c(),H=g(),K=O(),R=(e,t,s="")=>{Object.entries(e).forEach(([r,i])=>{if(typeof i>"u"||i?.length===0){delete e[r];return}if(!s.length&&K[t]?.[r]===i){delete e[r];return}let n=H[r]?.[i]||i;if(typeof n>"u")throw new Error(`Unknown ${r} ${i}`);e[r]=n,r==="title"&&(n=n.replace(/[\n]+$/,""));let b=s===""?D[r]:D[`${s}.${r}`];b&&(e[b]=n,delete e[r]),typeof i=="object"&&R(n,t,`${s}.${r}`.replace(/^\./,""))})};X.exports=e=>{let t=JSON.parse(JSON.stringify(e)),{settings:s,type:r}=t;return R(s,r),t}});var F=o((ce,B)=>{var L=c(),Q=g(),T=O(),U=(e,t="")=>{Object.entries(e).forEach(([s,r])=>{let i=L.reverse[s]||s,n=Q[i]?.reverse?.[r]||r;e[i]=n,i!==s&&delete e[s],typeof n=="object"&&U(n,`${t}.${s}`.replace(/^\./,""))})};B.exports=e=>{let t=JSON.parse(JSON.stringify(e)),{settings:s,type:r}=t;U(s);let i=T[r]||{};return t.settings={...i,...s},t}});var Z=o((ae,G)=>{G.exports={compress:Y(),decompress:F()}});export default Z();
//# sourceMappingURL=web.js.map
