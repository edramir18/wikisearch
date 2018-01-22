# wikisearch
Repository to create a wikipedia search form, according the @freeCodeCamp challenge

## HTML5 CSS JS
This project will not use any framework or library to create the webpage, all the work will be done with plain html, css and javascript. No JQuery or Bootstrap will be used.

## Wikipedia API
To be able to query the wikipedia is necesary to include the parameter *origin=\** on the url request:

*Random Query*
```
https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&grnlimit=10&prop=info|extracts&inprop=url&exintro=true&explaintext=true&origin=*
```

Remenber to use *type=button* inside button on forms to prevent the default value of _submit_

### Useful Links
- [How to iterate over properties](http://2ality.com/2011/04/iterating-over-arrays-and-objects-in.html)
- [How to use HTML Templates](https://www.w3schools.com/tags/tag_template.asp)
- [Get element by Id](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [Pattern to check input fields](http://html5pattern.com/)

### BrowserSync
The npm package **BrowerSync** will be used to livereload and automatic refresh of the project's files. More information about the installation and configuration can be found on the following link [BrowserSync](https://browsersync.io/)
```
br
```
