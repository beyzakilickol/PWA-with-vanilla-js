let url = document.location.href;
let splitted_url = document.location.pathname.split('/')
if(splitted_url[1] !== '' && splitted_url[1] !== 'index.html' ){
    let indexToRemove = url.indexOf(splitted_url[1])-1;
    let noSlash = url.slice(0,indexToRemove) + url.slice(indexToRemove+1);
    window.location = noSlash.replace(splitted_url[1], '')
}



function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('people');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let people = data;

        return people.map(function(person) {
            let li = createNode('li')
                span = createNode('span');

            li.innerHTML = person.name;
            span.innerHTML = person.email;

            append(li, span);
            append(ul, li);

        });
    })
