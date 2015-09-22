define(["hbs", "hbs!../templates/dogNames", "hbs!../templates/dogTypes", "hbs!../templates/dogVolumes"], function(Handlebars, dogNameTmpl, dogTypeTmpl, dogVolTmpl) {

	//console.log("templates", Handlebars);

  var templates = {};
  // Create empty object to contain my hbs templates
  templates.dogName = dogNameTmpl;
  console.log('dogNameTmpl', dogNameTmpl);

  templates.dogType = dogTypeTmpl;
  console.log('dogTypeTmpl', dogTypeTmpl);

  templates.dogVol = dogVolTmpl;
  console.log('dogVolTmpl', dogVolTmpl);


  return templates;
});

 