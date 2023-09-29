let body=document.querySelector("#body")
console.log(body)
let btn=document.querySelectorAll(".btn")
btn.forEach(function(btnss){

btnss.addEventListener("click", function(e){
    if(e.target.id==="green")
    {
        body.style.backgroundColor=e.target.id

    }
    if(e.target.id==="yellow")
    {
        body.style.backgroundColor=e.target.id

    }

    if(e.target.id==="red")
    {
        body.style.backgroundColor=e.target.id

    }
    if(e.target.id==="blue")
    {
        body.style.backgroundColor=e.target.id

    }
})
    
})
