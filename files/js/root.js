require('lib/jm',jm=>{
let div_navigationbar=document.getElementById('div_navigationbar')
div_navigationbar.appendChild(document.createTextNode(' | '))
div_navigationbar.appendChild((()=>{
    let a=document.createElement('a')
    a.href='javascript:'
    a.onclick=()=>{
        jm.send('crawl')
    }
    a.textContent='Crawl'
    return a
})())
jm.send('getVideos').then(val=>{
    console.log(val)
    val.forEach(videos=>{
        document.body.appendChild((()=>{
            let img=document.createElement('img')
            img.style.width='480px'
            img.src=`api/getCover?id=${videos._id}`
            return img
        })())
    })
})
})
