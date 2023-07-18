// Define the movie collection
var movies = [
  { title: "Indiana Jones", genre: "Action", length: 154 },
  { title: "The little mermaid", genre: "Romance", length: 135 },
  { title: "Fast X", genre: "Action", length: 141 },
  { title: "Evil Dead Rise", genre: "Horror", length: 96 },
  { title: "The Flash", genre: "Action", length: 144 },
];

// Loop through the movies and create div elements for each
var movieListDiv = document.getElementById("movieList");
for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];

    // Create a new div for the movie
    var movieDiv = document.createElement("div");
    movieDiv.className = "movie";

    // Set the content of the movie div
      movieDiv.innerHTML = "<strong>Title:</strong> " + movie.title + "<br>" +
                       "<strong>Director:</strong> " + movie.genre + "<br>" +
                       "<strong>Length:</strong> " + movie.length + " minutes";

    // Apply the highlight class if the length is greater than 150
    if (movie.length > 150) {
        movieDiv.classList.add("highlight");
    }

    // Append the movie div to the movie list
    movieListDiv.appendChild(movieDiv);
}