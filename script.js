"use strict"

const display = document.querySelector('.display-box');
const displayList = document.querySelector('.quotes-items');
const form = document.querySelector('.form')

const quoteDisplayHandler = function (quote, author) {

    let html = `<li class="quote">
                   <p class="content">${quote}</p>
                   <p>By: ${author}</p>
                </li>`

    displayList.insertAdjacentHTML('beforeend', html);
}


const quotes = fetch("https://api.quotable.io/quotes")
    .then(function (response) {

        return response.json();
    }).then(function (data) {

        data.results.map(ele => quoteDisplayHandler(ele.content, ele.author));
    })

form.addEventListener('submit', function(event){

    event.preventDefault();
    console.log(event)
})







