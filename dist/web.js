(()=>{var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var u=i((F,a)=>{var x={backgroundColor:"bc",borderRadius:"br",color:"c",fileId:"fId",icon:"i",placeholder:"ph",sitemapPageId:"spId",size:"s",title:"t"};a.exports=x;a.exports.reverse=Object.fromEntries(Object.entries(x).map(([r,e])=>[e,r]))});var j=i((G,m)=>{var O={primary:0,surfaceVariant:1};m.exports=O;m.exports.reverse=Object.fromEntries(Object.entries(O).map(([r,e])=>[e,r]))});var h=i((H,d)=>{var q={"System/union":0};d.exports=q;d.exports.reverse=Object.fromEntries(Object.entries(q).map(([r,e])=>[e,r]))});var S=i((K,f)=>{var E={xs:9,s:10,m:20,l:30,xl:31};f.exports=E;f.exports.reverse=Object.fromEntries(Object.entries(E).map(([r,e])=>[e,r]))});var g=i((L,l)=>{var v={color:j(),icon:h(),size:S()};l.exports=v;l.exports.reverse=Object.fromEntries(Object.entries(v).map(([r,e])=>[e,r]))});var b=i((Q,I)=>{I.exports={button:{backgroundColor:"black",borderRadius:0},text:{size:"m"},image:{opacity:1},input:{placeholder:"Search"}}});var N=i((T,M)=>{var y=u(),J=g(),C=b();M.exports=r=>{let e=JSON.parse(JSON.stringify(r)),{settings:n,type:c}=e;return Object.entries(n).forEach(([t,o])=>{if(typeof o>"u"||o?.length===0){delete n[t];return}if(C[c][t]===o){delete n[t];return}let s=J[t]?J[t][o]:o;if(typeof s>"u")throw new Error(`Unknown ${t} ${o}`);n[t]=s,t==="title"&&(s=s.replace(/[\n]+$/,""));let p=y[t];p&&(n[p]=s,delete n[t])}),e}});var z=i((W,w)=>{var R=u(),P=g(),U=b();w.exports=r=>{let e=JSON.parse(JSON.stringify(r)),{settings:n,type:c}=e,t={};Object.entries(n).forEach(([s,p])=>{let $=R.reverse[s]||s,B=P.reverse[s]?.[p]||p;t[$]=p});let o=U[c]||{};return e.settings={...o,...t},e}});var A=i((X,V)=>{V.exports={compress:N(),decompress:z()}});A();})();
//# sourceMappingURL=web.js.map
