/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  
  
  document.getElementsByTagName("img")[0].addEventListener("mouseover", mouseOver);
    document.getElementsByTagName("img")[0].addEventListener("mouseout", mouseOut);


    function mouseOver() {
        let newImg = document.getElementsByTagName("img")[0];
        let url = newImg.getAttribute("data-hover");
        newImg.setAttribute("src",url);

    }

    function mouseOut() {
        let newImg = document.getElementsByTagName("img")[0];
        let url = newImg.getAttribute("data-hover");
        

    }



})();
