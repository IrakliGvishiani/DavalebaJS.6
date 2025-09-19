let film = {
  title: "Avengers: Endgame",
  Director: ["Anthony russo","Joe Russo"],
  Production: {
    Studio: "Marvel Studios",
    Distributor: "Walt Disney Studios",
    Country: "USA",
  },
  Year: 2019,

  Actors: [
    "Robert Downey Jr",
    "Chris Evans",
    "Scarlett Johansson",
    "Chris Hemsworth",
  ],

  Genres: ["Action", "Adventure", "Sci-Fi"],
  Duration: 181,
  isOscarWinner: true,
  Language: "English",

  Subtitles: ["English", "Russian", "French", "Georgian"],
  Rating: 8.4,
  Reviews: [
    {
      user: "John",
      comment: null,
      score: 8,
    },
    {
      user: "David",
      comment: "Epic Fnal! I love it!",
      score: 10,
    },
  ],

  getFilmInfo() {
    return `${this.title} (${this.Year}) - ${this.Genres}`;
  },


  addActor() {
    let ad = prompt("Add Actor");
    this.Actors.push(ad);
    return this.Actors;
  },

  subtitleLang() {
    let check = prompt("Type Your Language");
    let check2 = this.Subtitles.filter(
      el => el.toLowerCase() == check.toLowerCase()
    );

    return check2.length > 0;
  },

  addReview(user, comment, score) {
     let review = {
        user : user,
        comment : comment,
        score : score
     }

     this.Reviews.push(review)
     return this.Reviews
  },

  averageRating(){
    let sum = 0

    for(let el of this.Reviews){
        sum += el.score
    }

    return Math.round(sum / this.Reviews.length)
  }
};

// console.log(film.getFilmInfo());

// console.log(film.addActor());
// console.log(film.subtitleLang());

// console.log(film.addReview(`irakli`, 'wava ra', 7));

// film.addReview('Luke',null,2)
// console.log(film.averageRating());





