var jm={
    send,
}
function send(name,val){
    let xhr=new XMLHttpRequest
    xhr.open('POST','api/'+name)
    xhr.send(JSON.stringify(val))
    return new Promise(rs=>{
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4&&xhr.status==200){
                let res
                try{
                    res=JSON.parse(xhr.responseText)
                }catch(e){
                }
                rs(res)
            }
        }
    })
}
