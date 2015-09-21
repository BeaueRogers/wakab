define(["hbs",
        "hbs!../templates/dogs",
        "hbs!../templates/cats"],
function(Handlebars, dogTemplate, catTemplate) {

  var templates = {};
  templates.dogs = dogsTemplate;
  templates.cats = catsTemplate;

  return templates;
});
