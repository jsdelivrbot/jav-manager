module.exports=env=>{
    env.db.collection('sources').find().toArray((err,docs)=>{
        if(err)
            throw err
        env.res.writeHead(200)
        env.res.end(JSON.stringify(docs))
    })
}
