/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const run = document.getElementById("run");

    run.addEventListener("click", () => {
        window.lib.getPosts(callbackPost);

        function callbackPost(err, articles) {
            articles.forEach((art) => {
                window.lib.getComments(art.id, (error, comments) => { console.log(comments.id);

                
                

                
                })           
                
            })
        }
    })
})();