(()=>{var s=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var m=s((H,a)=>{var O={backgroundColor:"bc",borderRadius:"br",color:"c",desktopPosition:"dp",fileId:"fId",fontWeight:"fw",icon:"i",placeholder:"ph",sitemapPageId:"spId",size:"s",state:"st",title:"t"};a.exports=O;a.exports.reverse=Object.fromEntries(Object.entries(O).map(([t,e])=>[e,t]))});var q=s((K,f)=>{var j={primary:0,surfaceVariant:1};f.exports=j;f.exports.reverse=Object.fromEntries(Object.entries(j).map(([t,e])=>[e,t]))});var E=s((L,u)=>{var h={500:5,600:6,700:7,800:8};u.exports=h;u.exports.reverse=Object.fromEntries(Object.entries(h).map(([t,e])=>[e,t]))});var S=s((Q,d)=>{var v={"System/union":0};d.exports=v;d.exports.reverse=Object.fromEntries(Object.entries(v).map(([t,e])=>[e,t]))});var I=s((T,l)=>{var w={xs:9,s:10,m:20,l:30,xl:31};l.exports=w;l.exports.reverse=Object.fromEntries(Object.entries(w).map(([t,e])=>[e,t]))});var b=s((X,g)=>{var J={color:q(),fontWeight:E(),icon:S(),size:I()};g.exports=J;g.exports.reverse=Object.fromEntries(Object.entries(J).map(([t,e])=>[e,t]))});var x=s((Y,M)=>{M.exports={button:{backgroundColor:"black",borderRadius:0,state:"normal",icon:null},text:{size:"m",fontWeight:500,color:"#000"},image:{opacity:1},input:{placeholder:"Search"}}});var V=s((Z,z)=>{var P=m(),N=b(),R=x();z.exports=t=>{let e=JSON.parse(JSON.stringify(t)),{settings:n,type:c}=e;return Object.entries(n).forEach(([r,o])=>{if(typeof o>"u"||o?.length===0){delete n[r];return}if(R[c][r]===o){delete n[r];return}let i=N[r]?N[r][o]:o;if(typeof i>"u")throw new Error(`Unknown ${r} ${o}`);n[r]=i,r==="title"&&(i=i.replace(/[\n]+$/,""));let p=P[r];p&&(n[p]=i,delete n[r])}),e}});var $=s((k,W)=>{var U=m(),A=b(),B=x();W.exports=t=>{let e=JSON.parse(JSON.stringify(t)),{settings:n,type:c}=e,r={};Object.entries(n).forEach(([i,p])=>{let C=U.reverse[i]||i,F=A.reverse[i]?.[p]||p;r[C]=p});let o=B[c]||{};return e.settings={...o,...r},e}});var D=s((_,y)=>{y.exports={compress:V(),decompress:$()}});D();})();
//# sourceMappingURL=web.js.map
