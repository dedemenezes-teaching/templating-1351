// RENDERING HTML INSIDE YOUR JAVASCRIPT FILE
fetch('https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    const list = document.querySelector('#results')
    data.Search.forEach((movie) => {
      const movieCard = `<div class='col-3'>
          <div class="card">
            <img
              src="${movie.Poster}"
              class="card-img-top" alt="${movie.Title} poster">
            <div class="card-body">
              <h6 class="card-title">${movie.Title}</h6>
              <p class="card-text">${movie.Year}</p>
              <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
            </div>
          </div>
        </div>`

      list.insertAdjacentHTML('beforeend', movieCard)
    })


  })


// RENDERING TEMPLATE WITH JAVASCRIPT
const template = document.getElementById('movie-card-template')

fetch('https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    const list = document.querySelector('#results')
    data.Search.forEach((movie) => {
      const movieCardTemplateClone = template.content.cloneNode(true)
      movieCardTemplateClone.querySelector('img').src = movie.Poster
      movieCardTemplateClone.querySelector('h6').innerText = movie.Title
      movieCardTemplateClone.querySelector('p').innerText = movie.Year
      movieCardTemplateClone.querySelector('a').href = `https://www.imdb.com/title/${movie.imdbID}`
      // list.insertAdjacentHTML('beforeend', movieCardTemplateClone)
      console.log(movieCardTemplateClone)
      list.appendChild(movieCardTemplateClone)
    })


  })



// MUSTACHE RENDERING EACH MOVIE ITERATING
import Mustache from 'mustachejs'

const template = document.getElementById('movie-card-template').innerHTML

fetch('https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    const list = document.querySelector('#results')
    data.Search.forEach((movie) => {
      const output = Mustache.render(template, movie)
      // console.log(output)
      list.insertAdjacentHTML('beforeend', output)
    })
  })


// MUSTACHE RENDERING LIST
import Mustache from 'mustachejs'

const template = document.getElementById('movie-card-template').innerHTML

fetch('https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7')
  .then(response => response.json())
  .then((data) => {
    // console.log(data)
    const list = document.querySelector('#results')
    // data.Search.forEach((movie) => {
    //   const output = Mustache.render(template, movie)
    //   // console.log(output)
    //   list.insertAdjacentHTML('beforeend', output)
    // })
    const movieData = { 'movies': data.Search }
    list.innerHTML = Mustache.render(template, movieData)
  })
