var numofwon = 0;
var numoflost = 0;
for (var i = 1; i <= 5; i++) {
    var num1 = parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomnumber = Math.floor(Math.random() * 5) + 1;

    if (num1 == randomnumber) {
        console.log("You have won");
        numofwon++;
    }
    else {
        console.log("You have lost. Random number was :" + randomnumber);
        numoflost++;
    }

}

document.write(" Total Number of won"+ numofwon + "<br>");

document.write(" Total Number of lost"+ numoflost + "<br>");
