const API="https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY";

async function loadMatches(){

const res=await fetch(API);
const data=await res.json();

const matches=data.data;

const container=document.getElementById("matches");

container.innerHTML="";

matches.forEach(match=>{

const div=document.createElement("div");

div.innerHTML=`
<h3>${match.name}</h3>
<p>${match.status}</p>
<hr>
`;

container.appendChild(div);

});

}

loadMatches();

setInterval(loadMatches,30000);
