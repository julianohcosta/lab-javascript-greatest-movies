// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(el => el.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) return 0;
    if (!moviesArray.some(el => el.director === "Steven Spielberg")) return 0;
    return moviesArray.filter(el => el.genre.includes("Drama") && el.director === "Steven Spielberg").length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0;
    
    const avg = [];

    for (let movie of moviesArray) {
        if(movie.score) {
            avg.push(movie.score);
        } else {
            avg.push(0)
        }
    }

    return Math.round((avg.reduce((a, b) => a + b, 0) / moviesArray.length + Number.EPSILON) * 100) / 100;
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
/**
 * 
 * @param {Array<object} moviesArray 
 */
function dramaMoviesScore(moviesArray) {
    
    const dramaMovies = moviesArray.filter(m => m.genre.includes("Drama"))
    if(dramaMovies.length === 0) return 0;
    if(dramaMovies.length === 1) return dramaMovies[0].score;

    let avg = 0;
    dramaMovies.forEach(m => avg += m.score)

    return Math.round((avg / dramaMovies.length + Number.EPSILON) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    moviesArray.sort((m1, m2) => {
        if (m1.year > m2.year) return 1;
        if (m1.year < m2.year) return -1;
        if (m1.title > m2.title) return 1;
        if (m1.title < m2.title) return -1;
    })

    return [...moviesArray]
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(m => m.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
