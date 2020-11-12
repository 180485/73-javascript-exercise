/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




    const run = document.getElementById('run')
    run.addEventListener('click',function(){
        const r = Math.round(Math.random() * 255 + 1 );
        const g = Math.round(Math.random() * 255 + 1 );
        const b = Math.round(Math.random() * 255 + 1 );
        
         

        document.body.style.backgroundColor ='rgb('+ r +','+ g +','+ b +')';
       
    });






