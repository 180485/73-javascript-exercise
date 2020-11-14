/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    
     document.getElementById("run").addEventListener("click", function() {
    
    var date2 = new Date ();
    
    var birthday = new Date (document.getElementById("dob-year").value ,document.getElementById("dob-month").value, 
document.getElementById("dob-day").value);
    
    var age = date2.getFullYear()- birthday.getFullYear();
     
    var months = date2.getMonth()-birthday.getMonth();
     if (months < 0 || (months === 0 && today.getDate() < birthday.getDate())){
        age +1;
    } 
       
     document.getElementById("post").innerHTML = " <h2 style=\"text-align: center;\"> your age is: " + age + " Years old!! </h2>";

}


    )