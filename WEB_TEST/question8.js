// Define an object to store movie information
var favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30, // Duration in minutes
    star: {
        name: "Puff",
        country: "Uganda",
        age: 45
    }
};

// Function to log movie information
function logMovieInfo(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes. " +
                "Star " + movie.star.name + " is " + movie.star.age + " years old and born in " + movie.star.country + ".");
}

// Call the function to log the movie information
logMovieInfo(favoriteMovie);
