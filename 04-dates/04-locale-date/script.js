/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  
  
  let val ;

  const today = new Date();
  let settoday = new Date('12-11-2020 16:40');

  val = today.toString();

  document.getElementById("target").innerHTML = val;

  console.log(val);

  
    

})();
