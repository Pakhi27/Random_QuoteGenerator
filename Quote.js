const api_url="https://api.quotable.io/random";
const Quotename=document.getElementById("quote");
const author=document.getElementById("author");

async function getQuote(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    Quotename.innerHTML=data.content;
    author.innerHTML=data.author;
}
getQuote(api_url);

document.addEventListener("click" ,function(event){
    if(event.target.id ==="btn1"){
        getQuote(api_url);
    }
    else if(event.target.id ==="btn2"){
        tweet();
    }
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+Quotename.innerHTML+"----by"+author.innerHTML,"Tweet window","width=600,height=300");
}



