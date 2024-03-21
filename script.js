function calculateLove() {
var name1 = document.getElementById("name1").value;
var name2 = document.getElementById("name2").value;

if(name1 === '' || name2 === '') {
  alert("Please enter both names.");
  return;
}

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
//Ensuring the score is between 1 and 100vh

document.getElementById("result").innerHTML = name1 + " and " + name2 + " have a " + loveScore + "% compatability!";
}
