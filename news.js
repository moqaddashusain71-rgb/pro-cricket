const NEWS="https://newsapi.org/v2/everything?q=cricket&apiKey=00279dc951144e43b8413ac3ce36137e";

async function loadNews(){

const res=await fetch(NEWS);
const data=await res.json();

const container=document.getElementById("news");

data.articles.slice(0,10).forEach(n=>{

container.innerHTML+=`

<div class="card">

<h3>${n.title}</h3>

<p>${n.source.name}</p>

<a href="${n.url}" target="_blank">Read More</a>

</div>

`;

});

}

loadNews();
