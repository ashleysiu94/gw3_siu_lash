// Random Quote Generator - CADY HERON

var r_quote = [
	'"Calling somebody else fat won\'t make you any skinnier. Calling someone stupid doesn\'t make you any smarter. And ruining Regina George\'s life definitely didn\'t make me any happier. All you can do in life is try to solve the problem in front of you."',
	'"I know it may look like I was being a bitch, but that’s only because I was acting like a bitch."',
	'"Grool... I meant to say cool and then I started to say great."',
	'"It\'s not my fault you\'re like, in love with me, or something!"',
  '"Half the people in this room are mad at me, and the other half only like me because they think I pushed somebody in front a bus, so that’s not good."',
  '"In the real world, Halloween is when kids dress up and beg for candy. But in girl world, Halloween is the one time of year a girl can dress like a total slut and no other girl can say anything about it."',
  '"When you get bit by a snake, you have to suck out all the poison, that’s what I had to do, suck all the poison out of my life."'
];

var cadyquote = document.getElementById("cady-quote");
var rand_integer = Math.floor(Math.random() * r_quote.length);
cadyquote.innerHTML = r_quote[rand_integer];

var cadyquote2 = document.getElementById("cady-quote2");
cadyquote2.innerHTML = r_quote[rand_integer];

// Changing Profile Pic on Hover

document.getElementById("Cady-pic").addEventListener("mouseenter",
  function() {
    document.getElementById("Cady-pic").src = "images/Cady_funny.png";
  }, false
);

document.getElementById("Cady-pic").addEventListener("mouseleave",
  function() {
    document.getElementById("Cady-pic").src = "images/Cady_normal.png";
  }, false
);
