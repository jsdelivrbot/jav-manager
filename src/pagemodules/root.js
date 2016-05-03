module.exports=env=>{
    env.res.writeHead(200)
    env.res.write(`<!doctype html>
<base href=/>
<title>JAV Manager</title>
<div id=div_navigationbar>
<a href=sources>Sources</a>
</div>
<script src=${env.config.requireJs} async data-main=js/root></script>
`)
    env.res.end()
}
