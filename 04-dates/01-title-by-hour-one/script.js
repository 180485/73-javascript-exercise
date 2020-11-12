/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var text;
    var date1 = new Date();
    var hour = date1.getHours();
    var minute = date1.getMinutes();


    if (hour >= 12 && minute >= 30){ 
        text = "GOOD EVENING";
    
    } else if (hour >= 13) {
        text = "GOOD EVENING";
    
    }else {

        text = "HELLO";
    }

    console.log(date1.toString());
     
    alert(hour,minute);
     alert(text);   
    
    document.getElementById('target').innerHTML = text;

    

})();
