let
    http=           require('http'),
    fs=             require('fs'),
    MongoClient=    require('mongodb').MongoClient,
    url=            require('url'),
    env=            {},
    pagemodules={
        '/':                require('./pagemodules/root'),
        '/sources':         require('./pagemodules/sources'),
        '/sources/add':     require('./pagemodules/sources/add.js'),
        '/api/addSource':   require('./pagemodules/api/addSource'),
        '/api/delSource':   require('./pagemodules/api/delSource'),
        '/api/getSources':  require('./pagemodules/api/getSources'),
        '/api/getVideos':   require('./pagemodules/api/getVideos'),
        '/api/getCover':    require('./pagemodules/api/getCover'),
        '/api/crawl':       require('./pagemodules/api/crawl'),
    }
let srv=http.createServer((req,res)=>{
    let
        envForReq=Object.create(env),
        parsedUrl=url.parse(req.url,true)
    envForReq.req=req
    envForReq.res=res
    envForReq.parsedUrl=parsedUrl
    if(pagemodules[parsedUrl.pathname])
        return pagemodules[parsedUrl.pathname](envForReq)
    {
        let filepath='files'+decodeURIComponent(
            parsedUrl.pathname
        )
        try{
            if(fs.statSync(filepath).isFile())
                return fs.createReadStream(filepath).pipe(res)
        }catch(e){
        }
    }
    res.writeHead(404)
    res.end()
})
env.config=
    JSON.parse(fs.readFileSync('config.json').toString())
MongoClient.connect('mongodb://localhost:27017/javmanager',(err,db)=>{
    env.db=db
    env.agent=new http.Agent({
        maxSockets:8
    })
    srv.listen({
        host:'localhost',
        port:8080
    })
})
