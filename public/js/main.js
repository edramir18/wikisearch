function loadJSONOnArticle(name, target, pages) {
    const article = document.getElementById(name);
    const section = document.getElementById(target); 
    
    if(!article || !section) return;
    
    Object.keys(pages).forEach((k, i) => {
        const cloneArticle = article.content.cloneNode(true);        
        cloneArticle.querySelector("h3").textContent = pages[k]["title"];
        cloneArticle.querySelector("p").textContent = pages[k]["extract"];
        cloneArticle.querySelector("a")["href"] = pages[k]["fullurl"];
        
        if(section.children.length > i){
            section.replaceChild(cloneArticle, section.children[i]);
        } else {
            section.appendChild(cloneArticle);
        }
    });

}

function searchWiki(text){
    let searchURL;
    if (!text){
        searchURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&grnlimit=10&prop=info|extracts&inprop=url&exintro=true&explaintext=true&exsentences=3&origin=*";
    }else {
        searchURL = "";
    }
    const myHeaders = new Headers();
    const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
    fetch(searchURL, myInit)
        .then( response => {
            if(!response.ok){
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(json => {
            loadJSONOnArticle("wikiarticle", "wikisection", json.query.pages);
            document.getElementById("wikisection").classList.add("-isvisible");
        })
        .catch(error => {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
    document.getElementById("wikisection").classList.remove("-isvisible");
    return false;
}

function submitHandler (event) {    
    const form = event.target;
    event.preventDefault();
}

function resetHandler (event) {
    const main = document.getElementById("wikisection");
    main.textContent = "";
}

function randomHandler (event) {
    searchWiki();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded");
    const form = document.getElementById("form");
    form.addEventListener("submit", submitHandler);
    form.addEventListener("reset", resetHandler);
    form.querySelector('button[name="random"]').addEventListener("click", randomHandler);

    const main = document.getElementById("wikisearch");    
}, false);
