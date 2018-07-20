/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
matCount.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
msgCount.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
fullname.innerHTML = "Ronald McDonald";

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
age.innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var jobBox= document.createElement("div");
jobBox.id = "job";
jobBox.innerHTML="Clown and Restauranteur";
data.appendChild(jobBox);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobbyBox = document.createElement("div");
hobbyBox.id = "hobby";
hobbyBox.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.";
data.appendChild(hobbyBox);
//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var loc = document.createElement("div");
loc.id = "home";
loc.innerHTML = "Honolulu, Hawaii";
data.appendChild(loc);
//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var whatDoYouWant = document.createElement("div");
whatDoYouWant.id = "wants";
whatDoYouWant.innerHTML = "Looking for Mrs. McDonald.";
data.appendChild(whatDoYouWant);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var proBox = document.createElement("div");
proBox.id = "pro2";
proBox.innerHTML = "I make juicy hambugers and yummy shakes. I also like kids";
data.appendChild(proBox);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var nameElem = document.getElementsByClassName("firstName");
nameElem[0].innerHTML = "Wendy";


//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var ageElem = document.getElementsByClassName("otherAge");
ageElem[0].innerHTML = "50";


//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statusElem = document.getElementsByClassName("status");
statusElem[0].innerHTML = "Single Mother";


//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var namePeko = document.getElementsByClassName("firstName");
namePeko[1].innerHTML = "Peko Chan";

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
var ageElem2 = document.getElementsByClassName("otherAge");
ageElem2[1].innerHTML = "68";

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto
var thirdMatch = document.getElementsByClassName("firstName");
thirdMatch[2].innerHTML = "Jennifer";
var thirdMatch = document.getElementsByClassName("otherAge");
thirdMatch[2].innerHTML = "44";
var thirdMatch = document.getElementsByClassName("status");
thirdMatch[2].innerHTML = "married";
var thirdMatch = document.getElementsByClassName("motto");
thirdMatch[2].innerHTML = "My milkshakes only bring ants to the yard.";


