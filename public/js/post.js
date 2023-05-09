document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();
    const commObj = {
        text:document.querySelector("#comment").value,
    }
    fetch("/api/comments",{
        method:"POST",
        body:JSON.stringify(commObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("bruh")
        }
    })
})