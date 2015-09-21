define(function () {
    return {
        getFood: function (callback) {
            $.ajax({
              url: 'https://petfood.firebaseio.com/.json'
            }).done(
            function(food) {
              //console.log("We got the food", food);
              callback(food);
            });
        }
    };
});
