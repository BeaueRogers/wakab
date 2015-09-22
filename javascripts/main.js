requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },

  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(
  ["jquery", "lodash", "firebase", "bootstrap", "getUnique",
   "getTemplates"], 
   function($, _, firebase, bootstrap, unique, templates) {
    var dogBrandsObject = {};
  
    // Create a reference to your Firebase database
    var myFirebaseRef = new Firebase("https://acme-product-lines.firebaseio.com");

    // Listen for when anything changes on the "dog_brands" key
    myFirebaseRef.child("dog_brands").on("value", function(snapshot) {

    	console.log('snapshot.val()', snapshot.val());

    	// Store the entire dogFood key in a local variable
    	var dogData = snapshot.val();
    

      var dogObject = {dogBrands: dogData};
      console.log('dogObject', dogObject);

      $("#dog-brands").html(templates.dogShit(dogObject));     


  });

    myFirebaseRef.child("cat_brands").on("value", function(snapshot) {

      console.log('snapshot.val()', snapshot.val());

      // Store the entire dogFood key in a local variable
      var catData = snapshot.val();
    

      var catObject = {catBrands: catData};
      console.log('catObject', catObject);

      $("#cat-brands").html(templates.catShit(catObject));      


  });

});

