let movies = [
  {
    name: "Avengers",
    poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    rating: "9.9",
    description:"S.H.I.E.L.D. leader Nick Fury is compelled to launch the Avengers programme when Loki poses a threat to planet Earth. But the superheroes must learn to work together if they are to stop him in time."
  },
  {
    name: "Rise of the Guardins",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_FMjpg_UX1000_.jpg",
    rating: "8.7",
    description:"When Pitch, an evil spirit, returns to planet Earth to assault the children and take over the world, a group of immortal guardians with extraordinary abilities join forces to protect the world."
  },
  {
    name: "Kung fu panda",
    poster:
      "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    rating: "9.7",
    description:"When Po the Panda, a kung fu enthusiast, gets selected as the Dragon Warrior, he decides to team up with the Furious Five and destroy the evil forces that threaten the Valley of Peace."
  },
  {
    name: "moana",
    poster: "https://i.ebayimg.com/images/g/HGQAAOSwO6haj7GA/s-l1600.jpg",
    rating: "9.3",
    description:"Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight."
  },
  {
    name: "Ice Age",
    poster: "https://i.ebayimg.com/images/g/95cAAOSwH2tiJnu3/s-l1200.webp",
    rating: "9.2",
    description:"Manny the mammoth, Sid the loquacious sloth, and Diego the sabre-toothed tiger go on a comical quest to return a human baby back to his father, across a world on the brink of an ice age."
  },
  {
    name: "Luka",
    poster: "https://lostposters.com/wp-content/uploads/2022/12/Luca9.jpg",
    rating: "9.6",
    description:"Moana, daughter of chief Tui, embarks on a journey to return the heart of goddess Te Fitti from Maui, a demigod, after the plants and the fish on her island start dying due to a blight."
  },
  {
    name: "Rumble",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSaalzQNv9_6iNrzLeDKkJuwkTJLufYM3fsPO6kDj7tLRTT-udzX035tgvTaEfDrjVzQ&usqp=CAU",
    rating: "8.9",
    description:"Winnie sets out to find a monster to represent her town in the sport of monster wrestling. She comes across Steve, a red reptilian amateur monster wrestler, who loves dancing."
  },
  {
    name: "Sonic",
    poster:
      "https://assetsio.reedpopcdn.com/sonic-2-poster.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    rating: "9.3",
    description:"Sonic the Hedgehog is a Japanese video game series and media franchise created by Yuji Naka, Naoto Ohshima, and Hirokazu Yasuhara for Sega. The franchise follows Sonic"
  },
];

function searchlogic() {
  let movieName = document.getElementById("search").value;
  if (movieName !== "") {
    let result = movies.filter(function (movie) {
      return movie.name.toUpperCase().includes(movieName.toUpperCase());
    });
    displayMovies(result);
  }
  else {
    displayMovies(movies);
  }
}


function displayMovies(data) {
  document.getElementById("movies").innerHTML="";
  let htmlString = '';
  for (let i = 0; i < data.length; i++) {
    htmlString = htmlString+ `
      <div class="movie">
        <div class="overlay">
          <div class="video"></div>
          <div class="details">
            <h1>${data[i].name}</h1>
            <h2>${data[i].rating}</h2>
            <p>
              ${data[i].description}
            </p>
          </div>
        </div>
        <img src="${data[i].poster}" class="poster" alt="poster" />
      </div>
    `;
  }
  document.getElementById("movies").innerHTML=htmlString;
}  
displayMovies(movies);