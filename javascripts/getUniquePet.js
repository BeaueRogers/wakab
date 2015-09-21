define(["lodash"], function(_) {
  return function(allFoodArray) {


    var uniqueBrands = _.chain(allFoodArray)
                         .uniq("name")
                         .pluck("name")
                         .value();

    var uniqueTypes = _.chain(allFoodArray)
                         .uniq("types")
                         .pluck("types")
                         .value();

    var uniqueBreeds = _.chain(allFoodArray)
                         .uniq("breeds")
                         .pluck("breeds")
                         .value();
    return {
      uniqueBrands: uniqueBrands,
      uniqueTypes: uniqueTypes,
      uniqueBreeds: uniqueBreeds
    };
  };
});
