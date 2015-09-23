define(["hbs", 
  "hbs!../templates/dogNames", 
  "hbs!../templates/dogTypes", 
  "hbs!../templates/dogVolumes",
  "hbs!../templates/catNames",
  "hbs!../templates/catBreeds",
  "hbs!../templates/catTypes",
  "hbs!../templates/catVolumes"
  ], function(Handlebars, dogNameTmpl, dogTypeTmpl, dogVolTmpl, catNameTmpl, catBreedTmpl, catTypeTmpl, catVolTmpl) {

  //console.log("templates", Handlebars);

  var templates = {};
  // Create empty object to contain my hbs templates
  templates.dogName = dogNameTmpl;
 // console.log('dogNameTmpl', dogNameTmpl);

  templates.dogType = dogTypeTmpl;
 //console.log('dogTypeTmpl', dogTypeTmpl);

  templates.dogVol = dogVolTmpl;
 // console.log('dogVolTmpl', dogVolTmpl);
  
  templates.catName = catNameTmpl;
 // console.log('catNameTmpl', catNameTmpl);

  templates.catBreed = catBreedTmpl;
 // console.log('catNameTmpl', catNameTmpl);

  templates.catType = catTypeTmpl;
 // console.log('catTypeTmpl', catTypeTmpl);

  templates.catVol = catVolTmpl;
 // console.log('catVolTmpl', catVolTmpl);

  return templates;

});









// define(["hbs", "hbs!../templates/dogs", "hbs!../templates/cats", "hbs!../templates/dogbrand"], function(Handlebars, dogTemplate, catTemplate, dogBrandTemplate) {

//   //console.log("templates", Handlebars);

//   var templates = {};
//   // Create empty object to contain my hbs templates
//   templates.dogShit = dogTemplate;
//   templates.catShit = catTemplate;
//   templates.dogBrand = dogBrandTemplate;


//   return templates;
// });

  /* Assign the key of songs to my object and set it equal to the value of my songs template
  templates.artists = artistTemplate;
  // Assign the key of songs to my object and set it equal to the value of my artist template
  templates.albums = albumTemplate;
  // Assign the key of songs to my object and set it equal to the value of my album template
  return templates;
});
*/










// define(["hbs", "hbs!../templates/dogs", "hbs!../templates/cats"], function(Handlebars, dogTemplate, catTemplate) {

// 	//console.log("templates", Handlebars);

//   var templates = {};
//   // Create empty object to contain my hbs templates
//   templates.dogShit = dogTemplate;
//   templates.catShit = catTemplate;


//   return templates;
// });

//    Assign the key of songs to my object and set it equal to the value of my songs template
//   templates.artists = artistTemplate;
//   // Assign the key of songs to my object and set it equal to the value of my artist template
//   templates.albums = albumTemplate;
//   // Assign the key of songs to my object and set it equal to the value of my album template
//   return templates;
// });
