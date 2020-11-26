/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    (function() {
        
        var letterContainer = document.getElementById("target");
        var letters = letterContainer.innerText;
        var lettersArray = letters.split("");
    
    
        letterContainer.innerText = "";
    
    
    
        /*var i;
        for (i = 0; i < lettersArray.length; i++) {
            var fontsize = i % 8;
            var result = lettersArray[i].fontsize(fontsize);
    
            document.getElementById("target").innerHTML += result;*/
        
    
    

        lettersArray.forEach(function (letter,i){
            var fontsize = i % 7;
            var result = lettersArray[i].fontsize(fontsize);
    
            document.getElementById("target").innerHTML += result;
            console.log("loop number" + 1 + " for letter:" + letter);
        })


        



         /*function getRandomInt(max) {
             return Math.floor(Math.random() * Math.floor(max));
         }*/
    
    

    })();

