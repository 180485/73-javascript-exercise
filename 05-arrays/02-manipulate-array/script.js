/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
   
    // your code here
  
    //take off end
   fruits.pop();
   //take off front
   fruits.shift();
   //add on to end
   fruits.push ("kiwi");
   //add on to front 
    fruits.unshift("banana");
   
    document.getElementById("run").addEventListener("click", function() {
    
      
    
    });

    document.getElementById("post").innerHTML = fruits;  
      

})();
