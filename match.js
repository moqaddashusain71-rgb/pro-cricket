const params=new URLSearchParams(location.search);
const id=params.get("id");

const API=`https://api.cricapi.com/v1/match_info?apikey=00279dc951144e43b8413ac3ce36137e&id=${id}`;

async function loadMatch(){

const res=await fetch(API);
const data=await res.json();

const m=data.data;

document.getElementById("match").innerHTML=`

<h2>${m.name}</h2>

<p>Status: ${m.status}</p>

<p>Venue: ${m.venue}</p>

`;

}

loadMatch();
