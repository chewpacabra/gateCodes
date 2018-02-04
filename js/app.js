var Cat = function (data) {
  this.numberOfClicks = ko.observable(data.numberOfClicks);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function() {
    var clicks = this.numberOfClicks();
    if (clicks < 5) {
      return 'kitten';
    }
    else if (clicks < 10) {
      return 'cat';
      }
    else {
      return 'tiger';
    }
  }, this);
}

var ViewModel = function() {
  var self = this;

//   $.getJSON( "data.json", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
//
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem) );
  });

  this.currentCat = ko.observable( this.catList()[0]);

  this.registerClick = function() {
    self.currentCat().numberOfClicks(self.currentCat().numberOfClicks() + 1);
  };

  this.resetClick = function() {
    this.currentCat().numberOfClicks(0);
  };

  this.hasClickedTooManyTimes = ko.computed(function() {
    return this.currentCat().numberOfClicks() >= 3;
  }, this);

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };

  this.jsonify = function(){
    console.log(ko.toJSON(self.catList));
  };
};


ko.applyBindings( new ViewModel());
