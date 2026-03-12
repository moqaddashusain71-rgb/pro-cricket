const API="https://api.cricapi.com/v1/currentMatches?apikey=00279dc951144e43b8413ac3ce36137e";

async function loadMatches(){

const res=await fetch(API);
const data=await res.json();

const matches=data.data;

const container=document.getElementById("matches");

container.innerHTML="";

matches.forEach(m=>{

container.innerHTML+=`

<div class="card">

<h3>${m.name}</h3>

<p>${m.status}</p>

<a href="match.html?id=${m.id}">
<button>Match Details</button>
</a>

</div>

`;

});

}

loadMatches();

setInterval(loadMatches,15000);
