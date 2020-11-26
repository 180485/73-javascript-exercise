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
    (function() {
        
        var letterContainer = document.getElementById("target");
    
        var letters = letterContainer.innerText;
    
        console.log(letters);
    
        var lettersArray = letters.split(" ");
    
        console.log(lettersArray);
    
        letterContainer.innerText = "";
    
    
      //  var result = lettersArray[0].fontsize(5);
    
        var i;
        for (i = 0; i < lettersArray.length; i++) {
            var value = getRandomInt(10);
            var result = lettersArray[i].fontsize(value);
          
    
            document.getElementById("target").innerHTML += result;
        }
    
    
         function getRandomInt(max) {
             return Math.floor(Math.random() * Math.floor(max));
         }
    
    

    })();
})();
