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

    let table = '';
    let rows = 10;
    let cols = 1
    
    for (let r = 0; r < rows ; r++)
    {
        table += '<tr>';
        for (var c = 1;c < cols; c++)
    {
        table += '<td>' + c + '</td>';
    }

    table += '</tr>';
    }
     
    

})();




   