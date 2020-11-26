/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let password = document.getElementById("pass-one");
    let comfirm = document.getElementById("pass-two");
    let good_color = "#77FF33";
    let bad_color  = "#FF3333";
    
    let run = document.getElementById('run')
    run.onclick = function(){

    if(password.value == comfirm.value){
        password.style.backgroundColor = good_color
        comfirm.style.backgroundColor = good_color
       
    } else {
        password.style.borderColor = bad_color
        comfirm.style.borderColor = bad_color
        
    }

    

    }


   
  
})();
