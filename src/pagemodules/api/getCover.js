let
    fs=require('fs')
module.exports=env=>{
    fs.createReadStream(`videos/${
        env.parsedUrl.query.id
    }/cover.jpg`).pipe(env.res)
}
