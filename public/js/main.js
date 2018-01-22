function loadJsonOnTemplate(template, pages) {
    const article = document.getElementById(template.name);
    const section = document.getElementById(template.target); 
    
    if(!article || !section) return;
    
    Object.keys(pages).forEach((k, i) => {
        const cloneArticle = article.content.cloneNode(true);
        template.properties.forEach((p) => {
            cloneArticle.querySelector("." + p).textContent = pages[k][p];
        });
        if(section.children.length > i){
            section.replaceChild(cloneArticle, section.children[i]);
        } else {
            section.appendChild(cloneArticle);
        }
    });

}

function searchWiki(){
    const searchInput = document.forms["formwiki"]["searchwiki"];
    searchInput.value = "";
    searchInput.blur();

    const searchURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&grnlimit=10&prop=info|extracts&inprop=url&exintro=true&explaintext=true&exsentences=3&origin=*";

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
            loadJsonOnTemplate({
                name: "wikiarticle",
                target: "wikisection",
                properties: ["title", "extract"]
            }, json.query.pages);
        })
        .catch(error => {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });

    return false;
}

function submitHandler (event) {
    console.log(this);
    console.log(event);
    event.preventDefault();
}

function resetHandler (event) {
    console.log("reset function");
}

function randomHandler (event) {
    event.cancelBubble = true;
    console.log(event);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded");
    const form = document.getElementById("form");
    form.addEventListener("submit", submitHandler);
    form.addEventListener("reset", resetHandler);
    form.querySelector('button[name="random"]').addEventListener("click", randomHandler);


}, false);
