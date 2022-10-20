// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

/**
 * Definição do tipo Movie para autocomplete do VSCode
 * @typedef Movie
 * @type {object}
 * @property {string} title - Movie title.
 * @property {number} year - Release year.
 * @property {string} director - Director name.
 * @property {string} duration - Movie duration.
 * @property {Array.<string>} genre - Movie genres.
 * @property {number} score - Movie score.
 *
 */

// How could you "clean" a bit this array and make it unified (without duplicates)?

/**
 * @param {Array.Movie} moviesArray - Array de objetos Movie
 * @return {Array.<string>} Array com o nome das diretores de casa filme.
 */
function getAllDirectors(moviesArray) {
  return moviesArray.map((el) => el.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/**
 * @param {Array.<Movie>} moviesArray - Array de objetos Movie
 * @returns {number} O número de filmes do gênero drama dirigidos pelo Steven Spielberg.
 */
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/**
 *
 * @param {Array.<Movie>} moviesArray - Array de objetos Movie
 * @returns {number} A média de score dos filmes
 */
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const avg = [];

  for (let movie of moviesArray) {
    if (movie.score) {
      avg.push(movie.score);
    } else {
      avg.push(0);
    }
  }

  return (
    Math.round(
      (avg.reduce((a, b) => a + b, 0) / moviesArray.length + Number.EPSILON) *
        100
    ) / 100
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
/**
 * @param {Array.<Movie>} moviesArray - Array de objetos Movie
 * @returns {number} A média de score dos filmes do gênero drama
 */
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((m) => m.genre.includes("Drama"));
  if (dramaMovies.length === 0) return 0;
  if (dramaMovies.length === 1) return dramaMovies[0].score;

  let avg = 0;
  dramaMovies.forEach((m) => (avg += m.score));

  return Math.round((avg / dramaMovies.length + Number.EPSILON) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/**
 * @param {Array.<Movie>} moviesArray - Array de objetos Movie
 * @returns {Array.<Movie>} Array de objetos Movie ordenado.
 */
function orderByYear(moviesArray) {
  moviesArray.sort((m1, m2) => {
    if (m1.year > m2.year) return 1;
    if (m1.year < m2.year) return -1;
    if (m1.title > m2.title) return 1;
    if (m1.title < m2.title) return -1;
  });

  return [...moviesArray];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/**
 * @param {Array.<Movie>} moviesArray - Array de objetos Movie
 * @returns {Array.<Movie>} Array de objetos Movie.
 */
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((m) => m.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
/**
 *
 * @param {Array.<Movie>} moviesArray - Array de objetos Movie
 * @return {Array.<Movie>} Array de objetos Movie.
 */
function turnHoursToMinutes(moviesArray) {
  const newArray = [];

  for (const movie of moviesArray) {
    const duration = movie.duration;
    let hours = 0;
    let minutes = 0;

    if (duration.includes("h")) {
      hours = parseInt(duration.split(" ")[0].replace("h", "")) * 60;
    }
    if (duration.includes("min")) {
      minutes = parseInt(duration.split(" ")[1].replace("min", ""));
    }
    movie.duration = hours + minutes;

    newArray.push(movie);
  }
  
  return newArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
/**
 * @param {Array.<Movie>} moviesArray
 * @return {Array.<Movie>}
 */
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null

  console.log("###########################################################")

  /** Filter all unique years */
  const uniqueYears = [...new Set(moviesArray.map(m => m.year))]
  const averageScoreByYear = []
  
  for (let year of uniqueYears) {

    const filteredMovies = moviesArray.filter(movie => movie.year === year)
    let avg = 0;

    filteredMovies.forEach(movie => {avg += movie.score;})

    let average = Math.round((avg / filteredMovies.length + Number.EPSILON) * 100) / 100

    averageScoreByYear.push({year, average});
  }

  let bestYear = averageScoreByYear.filter(el => el.average === Math.max(...averageScoreByYear.map(element => element.average)))
  if (bestYear.length > 1){
    bestYear = bestYear.filter(el => el.year === Math.min(...bestYear.map(element => element.year)))
  }
  bestYear = bestYear[0]
  return `The best year was ${bestYear.year} with an average score of ${bestYear.average}`;
}