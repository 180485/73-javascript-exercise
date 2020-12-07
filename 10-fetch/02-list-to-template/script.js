/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', run);
       
    function run(){
            fetch('http://localhost:3000/heroes')
                .then(response => response.json())
                .then((data) => {
                    let output = '<h4>Title</h4>'
                    console.log(data);
                    data.forEach((hero) => {
                        output += `
                            <li>
                               
                                <strong> name: ${hero.name} </strong><br>
                                <em> alter-ego: ${hero.alterEgo} </em>
                                <p> power: ${hero.abilities}</p>
                                

                            </li>
                        `;
                    });
                   
                    document.getElementById("target").innerHTML = output;
                });
        
            }     



       



})();