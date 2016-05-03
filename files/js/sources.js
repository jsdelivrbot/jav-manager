require('lib/jm',jm=>{
jm.send('getSources').then(sources=>{
    sources.forEach(source=>{
        document.body.appendChild((()=>{
            let div=document.createElement('div')
            div.appendChild((()=>{
                let a=document.createElement('a')
                a.textContent=source.name+': '+source.website
                a.href=source.website
                return a
            })())
            div.appendChild(document.createTextNode(' '))
            div.appendChild((()=>{
                let a=document.createElement('a')
                a.textContent='delete'
                a.href='javascript:'
                a.onclick=()=>{
                    jm.send('delSource',source._id).then(()=>{
                        location='sources'
                    })
                }
                return a
            })())
            return div
        })())
    })
})
})
