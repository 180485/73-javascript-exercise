/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
 
 
    let i = 0;
    let messages = document.getElementById("target");
    let text = messages.innerHTML;
    target.innerHTML = ' ';
    let speed =  85; //speed duration of effect in millisec
    let delay = 50;
   

    typeWriter(); //to call function
    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed , delay);
        }
    }
 
    
    

})();
