module.exports=env=>{
    env.res.writeHead(200)
    env.res.write(`<!doctype html>
<base href=/>
<title>Sources</title>
<p>
<a href=.>Home</a> |
<a href=sources/add>Add</a>
<script src=${env.config.requireJs} async data-main=js/sources></script>
`)
    env.res.end()
}
