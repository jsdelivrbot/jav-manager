module.exports=env=>{
    env.res.writeHead(200)
    env.res.write(`<!doctype html>
<base href=/>
<title>Add Source</title>
<p>
<a href=.>Home</a> |
<a href=sources>Sources</a>
<form id=form>
<p>
Name: <input id=input_name>
<p>
Website: <input id=input_website>
<p>
<input id=input_submit type=submit disabled>
</form>
<script src=${env.config.requireJs} async data-main=js/sources/add></script>
`)
    env.res.end()
}
