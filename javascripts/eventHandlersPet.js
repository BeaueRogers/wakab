define(["jquery", "lodash", "getTemplatesPet", "getUniquePet"], function($, _, templates, unique) {

  var config = {
    originalFoodArray: []
  };

  var eventHandlers = function() {

  };

  eventHandlers.prototype.updateSongs = function(FoodArray) {
    config.originalFoodArray = FoodArray;
  };

  eventHandlers.prototype.init = function(options) {
    // Handle the user click on the "Clear Filter" button
    $("#clearFilter").click(function() {

      // Here's where I reset the filtered array back to
      // the value of the copy I created above
      allFoodArray = config.originalFoodArray;

      $("#foodList").html(templates.petfood({petFod: allFoodArray}));

      // Create unique artists again before binding to template
      var uniqueArtists = unique(allFoodArray).uniqueBrands;
      $("#brands").html(templates.brands({brands:uniqueBrands}));

      // Create unique albums again
      var uniqueAlbums = unique(allFoodArray).uniqueTypes;
      $("#types").html(templates.types({types:uniqueTypes}));

    });

    /*
      When user selects an artist, filter the album select element
      and the song list accordingly
     */
     $(document).on("click", "#Brands li > a", function(e){
      var selectedBrand = this.innerHTML;
      var matchingBrand = _.chain(config.originalFoodArray)
                            .filter(function(song) {
                              return song.artist === selectedArtist;
                            })
                            .uniq('types.name')
                            .pluck('types')
                            .value();
      $("#types").html(templates.albums({albums:matchingAlbums}));

      allSongsArray = _.filter(config.originalFoodArray, function(food) {
        return food.brand === selectedBrand;
      });
      $("#foodList").html(templates.food({food:allFoodArray}));

    });

    /*
      When the user selects an album, filter the artist select element
      and the song list accordingly
     */
    $(document).on("click", "#brand li > a", function(e){
      var selectedYear = $(this).attr("year");
      var selectedAlbum = this.innerHTML;

      var matchingArtists = _.chain(config.originalSongsArray)
                            .filter(function(song) {
                              return song.album.name === selectedAlbum;
                            })
                            .uniq('brand')
                            .pluck('brand')
                            .value();
      $("#brand").html(templates.artists({artists:matchingArtists}));

      allFoodArray = _.filter(config.originalFoodArray, function(food) {
        return food.brand.name === selectedBrand;
      });
      $("#foodList").html(templates.food({food:allFoodArray}));
    });
  };

  return new eventHandlers();

});
