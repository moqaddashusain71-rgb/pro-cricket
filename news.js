const NEWS_API="https://newsapi.org/v2/everything?q=cricket&apiKey=00279dc951144e43b8413ac3ce36137e";

async function loadNews(){

const res=await fetch(NEWS_API);
const data=await res.json();

const container=document.getElementById("news");

container.innerHTML="";

data.articles.slice(0,5).forEach(article=>{

const div=document.createElement("div");

div.innerHTML=`
<h4>${article.title}</h4>
<a href="${article.url}" target="_blank">Read</a>
`;

container.appendChild(div);

});

}

loadNews();
