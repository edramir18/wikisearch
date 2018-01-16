function searchWiki(){
    const searchInput = document.forms["formwiki"]["searchwiki"];
    searchInput.value = "";
    searchInput.blur();

    const searchURL = "https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=10&format=json&origin=*";

    const myHeaders = new Headers();

    const myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
    console.log(myHeaders);
    fetch(searchURL, myInit)
        .then( response => {
            if(!response.ok){
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(error => {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });

    return false;
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded");
}, false);
