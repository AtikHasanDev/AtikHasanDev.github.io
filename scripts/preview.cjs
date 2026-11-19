const http=require('node:http'), fs=require('node:fs'), path=require('node:path');
const root=path.resolve(__dirname,'..');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.png':'image/png','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document'};
http.createServer((req,res)=>{
 let pathname; try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
 const file=path.resolve(root,'.'+(pathname.endsWith('/')?pathname+'index.html':pathname));
 if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 fs.readFile(file,(error,data)=>{if(error){res.writeHead(404).end('Not found');return;}res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(data);});
}).listen(8000,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:8000'));
