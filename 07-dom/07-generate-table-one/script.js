/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    

    
    var myElement = document.getElementById("target");

    // create elemnts for table in body  elment
    var myTable = document.createElement("table");
    var tableBody = document.createElement("tBody");
    

    

    for (var i=0; i < 10 ; i++){
        var row = document.createElement("tr");
    
            var cell = document.createElement("td");
            row.appendChild(cell);
            tableBody.appendChild(row);

          }
         
            myTable.appendChild(tableBody);
            myElement.appendChild(myTable);
      
           

    

})();




   