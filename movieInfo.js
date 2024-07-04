let movie_title=document.getElementById("movie_title");
let year=document.getElementById("year");
let genre=document.getElementById("genre");
let description=document.getElementById("description");
let Actors=document.getElementById("Actors");
let director=document.getElementById("director");
let earning=document.getElementById("earning");
let ratings=document.getElementById("ratings");
let img=document.getElementById("img");
let img1=document.getElementById("img1");

let movie_container=document.getElementById("movie_container");
movie_container.classList.add('dnone');

let loader=document.getElementById("loader");
loader.classList.remove('loader');

let api="http://www.omdbapi.com/?apikey=61e576a4&t=";


function searchMovieKeyword(){
    loader.classList.add('loader');
    // movie_container.classList.remove('dnone');
    
    let movieName=document.getElementById("movieName").value;
    let searchKeyword=api + movieName;
    console.log(searchKeyword);
    // fetch("http://www.omdbapi.com/?apikey=61e576a4&t=avatar")
    fetch(searchKeyword)
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    console.log(data);
    movie_title.innerText = data.Title;
    year.innerText = data.Year;
    // ratings.innerText = data.imdbRating;
    ratings.innerText ="IBMD Rating: " + data.imdbRating;
    genre.innerText = data.Genre;
    description.innerText = data.Plot;
    Actors.innerText = data.Actors;
    director.innerText = data.Director;
    earning.innerText = data.BoxOffice;
    img.src=data.Poster;
    img1.src=data.Poster;
    loader.classList.remove('loader');
    movie_container.classList.remove('dnone');

    });
}