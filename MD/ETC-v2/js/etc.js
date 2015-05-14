var d = new Date();
var days = ["<p class='day'>Lyrics of a Sunday</p>The million other lives we can never lead, but we get over it.",
						"<p class='day'>Lyrics of a Monday</p>The World’s so fucked up, but the sun shines in.",
						"<p class='day'>Lyrics of a Tuesday</p>Fuck your Selfie. Eat your iPhone.",
						"<p class='day'>Lyrics of a Wednesday</p>Do what your Ma says but not really.",
						"<p class='day'>Lyrics of a Thursday</p>Bring my island to the coast and anchor me.",
						"<p class='day'>Lyrics of a Friday</p>The lover's standing over there.. I'm making heaven here.",
						"<p class='day'>Lyrics of a Saturday</p>Misdirected Youth. Masturbated scenes. Cummers for heartbreak and a status to dream."];
document.getElementById("wise-words").innerHTML = days[d.getDay()];

