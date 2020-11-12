/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {  
   
  var a = window.prompt("how old are you ?");
    var result = confirm(" you are " + a +"years old");
    if (result == false) {
      a = window.prompt (" Please try again")
    }
    
    var b = window.prompt(" Are You Female / Male");
    var result = confirm(" you are " + b );
    if (result == false) {
      a = window.prompt (" Please try again")
    }
    
     var c = window.prompt("Which city are you from ?");
      var result = confirm(" you are from " + c );
      if (result == false) {
      a = window.prompt (" Please try again")
    }

    var result = confirm(" Please Confirm Your Information");
    if (result == false) {
      result = "You pressed CANCEL!";
    } else {
      result = "You pressed OK!";
    }
  
   

     
    
    
    
     
    

   
  



})();