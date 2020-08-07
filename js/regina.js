// Random Quote Generator - REGINA GEORGE

var r_quote2 = [
	'"Gretchen, stop trying to make fetch happen! It\'s not going to happen!"',
	'"Get in loser, we\'re going shopping."',
	'"Your hair looks so sexy pushed back. Cady, will you please tell him his hair looks sexy pushed back?"',
	'"Boo, you whore!"',
  '"I gave him everything! I was half a virgin when I met him."',
  '"I\'m only eating foods with less than 30% calories from fat."',
  '"She thinks she\'s gonna have a party and not invite me? Who does she think she is? I, like, invented her, you know what I mean?"'
];

var reginaquote = document.getElementById("regina-quote");
var rand_integer2 = Math.floor(Math.random() * r_quote2.length);
reginaquote.innerHTML = r_quote2[rand_integer2];

var reginaquote2 = document.getElementById("regina-quote2");
reginaquote2.innerHTML = r_quote2[rand_integer2];

// Changing Profile Pic on Hover

document.getElementById("Regina-pic").addEventListener("mouseenter",
  function() {
    document.getElementById("Regina-pic").src = "images/Regina_funny.png";
  }, false
);

document.getElementById("Regina-pic").addEventListener("mouseleave",
  function() {
    document.getElementById("Regina-pic").src = "images/Regina_normal.png";
  }, false
);
