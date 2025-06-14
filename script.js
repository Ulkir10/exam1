import movies from "./movies.js";
let containermovies = document.querySelector('.containermovies')
let film_type = document.querySelector('#film_type')
let SearchMovie = document.getElementById('SearchMovie')
let searchButton = document.getElementById('searchButton')
let MovieType=document.getElementById('MovieType')
let Sort = document.getElementById('Sort')
function generator(movie){
    containermovies.innerHTML = ''
    movie.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML = `
            <img src="1200x675mf.jpg.png" alt="" class="film-img">
            <h1 class="film-name">${element.fulltitle}</h1>
            <ul class="raitings">
                <li class="raiting"${element.imdb_rating}</li>
                <li class="year">${element.movie_year}</li>
                <li class="time">${element.runtime}</li>
            </ul>
            <p class="Categories">${element.Categories}</p>
            <button class="btn">More info</button>
        `;
        containermovies.appendChild(card)
    });   
}
function filterAndSortMovie() {
    let filteredmovies = movies;
    const searchValue = SearchMovie.value.toLowerCase().trim();
    if (searchValue) {
        filteredmovies = filteredmovies.filter(movie =>
            movie.fulltitle.toLowerCase().includes(searchValue)
        );
    }
    if (Sort.value === 'alphabeticalAsc') {
        filteredmovies.sort((a, b) => a.fulltitle.localeCompare(b.fulltitle))
    } else if (Sort.value === 'alphabeticalDesc') {
        filteredmovies.sort((a, b) => b.fulltitle.localeCompare(a.fulltitle))
    } else if (Sort.value === 'raiting') {
        filteredmovies.sort((a, b) => parseFloat(a.imdb_rating) - parseFloat(b.imdb_rating))
    } else if (Sort.value === 'raitn') {
        filteredmovies.sort((a, b) => parseFloat(b.imdb_rating) - parseFloat(a.imdb_rating))
    } else if (Sort.value === 'year') {
        filteredmovies.sort((a, b) => parseFloat(a.movie_year) - parseFloat(b.movie_year))
    }else if (Sort.value === 'yearsecond') {
        filteredmovies.sort((a, b) => parseFloat(b.movie_year) - parseFloat(a.movie_year))
    }
    const selectType = MovieType.value.toLowerCase();
    if (selectType === 'all') {
        filteredmovies = filteredmovies;
    } else {
        filteredmovies = filteredmovies.filter(movie =>
            movie.Categories.toLowerCase().includes(selectType));
    }
    generator(filteredmovies);
}
searchButton.addEventListener("click", filterAndSortMovie);
SearchMovie.addEventListener("input", filterAndSortMovie);
generator(movies)
