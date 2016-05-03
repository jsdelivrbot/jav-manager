module.exports=env=>{
    env.res.writeHead(200)
    env.res.write(`<!doctype html>
<base href=/>
<title>Sources</title>
<div id=div_navigationbar>
<a href=.>Home</a> |
<a href=sources/add>Add</a>
</div>
<script src=${env.config.requireJs} async data-main=js/sources></script>
`)
    env.res.end()
}
