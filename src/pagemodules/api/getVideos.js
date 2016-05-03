module.exports=env=>{
    env.db.collection('videos').find().toArray((err,docs)=>{
        if(err)
            throw err
        env.res.writeHead(200)
        env.res.end(JSON.stringify(docs))
    })
}
