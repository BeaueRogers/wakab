<<<<<<< HEAD
define(["hbs",
        "hbs!../templates/songs",
        "hbs!../templates/filteredArtists",
        "hbs!../templates/filteredAlbums",
        "hbs!../templates/filteredGenres"],
function(Handlebars, songTemplate, artistTemplate, albumTemplate, genreTemplate) {

  var templates = {};
  templates.songs = songTemplate;
  templates.artists = artistTemplate;
  templates.albums = albumTemplate;
  templates.genres = genreTemplate;

  return templates;
});
=======
define(["hbs", "hbs!../templates/dogs", "hbs!../templates/cats"], function(Handlebars, dogTemplate, catTemplate) {

	//console.log("templates", Handlebars);

  var templates = {};
  // Create empty object to contain my hbs templates
  templates.dogShit = dogTemplate;
  templates.catShit = catTemplate;


  return templates;
});

  /* Assign the key of songs to my object and set it equal to the value of my songs template
  templates.artists = artistTemplate;
  // Assign the key of songs to my object and set it equal to the value of my artist template
  templates.albums = albumTemplate;
  // Assign the key of songs to my object and set it equal to the value of my album template
  return templates;
});
*/
>>>>>>> master
