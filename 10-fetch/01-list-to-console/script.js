/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
    document.getElementById("run").addEventListener("click", function(){
    
    
    fetch('https://restcountries.eu/rest/v2/all') 
     
     .then(response => {
         console.log (response); 
         return response.json();
     })

     .then(json => {
         console.log(json);
     })
     

    //.then (response => response.json ())  
    //.then(data => console.log(data));
    
    
     /* response object to get the data from by using JSON (JSON IS FORMAT FOR STORING DATA) it will be return to the promises
        and promise is way is javascript to handle an asynchronous event , to get resolved when the event is over when the data is retrieved.
        response is actually stream of data ,SO JASON STAND FOR JAVASCRIPT OBJECT NOTATION.
        by the method (then) so the method then can handle the response  */

    
})



})();
