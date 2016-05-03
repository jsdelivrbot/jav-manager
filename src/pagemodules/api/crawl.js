let
    http=           require('http'),
    fs=             require('fs'),
    mkdirp=         require('mkdirp')
module.exports=env=>{
    getAll(env)
    env.res.writeHead(200)
    env.res.end()
}
function getAll(env){
    env.db.collection('videos').drop(()=>{
        getByHead(env,'ipz')
        getByHead(env,'idbd')
    })
}
function getByHead(env,head){
    for(let i=1;i<=999;i++){
        let name=head+pad(i,3)
        // res for result
        get(env.agent,name).then(res=>{
            if(res==0)
                return
            let response=res
            console.log(`${name} is crawled.`)
            env.db.collection('videos').insertOne({
                name,
            },(err,res)=>{
                if(err)
                    throw err
                mkdirp.sync(`videos/${res.insertedId}`)
                response.pipe(fs.createWriteStream(
                    `videos/${res.insertedId}/cover.jpg`
                ))
            })
        })
    }
    function pad(num,len){
        return '0'.repeat(len-num.toString().length)+num
    }
}
function get(agent,name){
    return new Promise(rs=>{
        let req=http.get({
            agent,
            host:'www.ideapocket.com',
            path:`/images/works/${name}/${name}pl.jpg`
        },res=>{
            if(res.statusCode!=200){
                req.abort()
                return rs(0)
            }
            rs(res)
        })
    })
}
