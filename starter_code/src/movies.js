/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes() {
     let secArr = movies.map(function(movie){
       let time = (movie.duration).split(' ');
             if(time.length === 1 && time[0].includes('h')) {
               time = ((parseInt(time[0].replace(/\D/g,'')))*60);
             } else if (time.length === 1 && time[0].includes('min')){
               time = (parseInt(time[0].replace(/\D/g,'')));
             } else if (time.length === 2){
               time = ((parseInt(time[1].replace(/\D/g,'')))+((parseInt(time[0].replace(/\D/g,'')))*60));
             }
          return Object.assign({}, movie, {duration:time});
     });
   return secArr; 
 }
 
// Get the average of all rates with 2 decimals 


function ratesAverage(movies) {
     let numFinal = movies.reduce(function(sum, movie){
          return sum + parseFloat(movie.rate);
       }, 0) / movies.length;
   return numFinal;
 }


// Get the average of Drama Movies

function dramaMoviesRate(movies){
     let drama = movies.filter(movie => (movie.genre).includes('Drama'));
           
           let numFinal = drama.reduce(function(sum, movie){
                return sum + parseFloat(movie.rate);
             }, 0) / drama.length;
         return numFinal;
     }

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
