module.exports=env=>{
    let chunks=[]
    env.req.on('data',[].push.bind(chunks))
    env.req.on('end',()=>{
        let val
        try{
            val=JSON.parse(Buffer.concat(chunks).toString())
        }catch(e){
        }
        env.db.collection('sources').insertOne(val,err=>{
            if(err)
                throw err
            env.res.writeHead(200)
            env.res.end()
        })
    })
}
