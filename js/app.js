var GateCode = function(gateCode) {
  var self = this;
  self.name = gateCode.name;
  self.address = ko.observable(gateCode.address);
  self.contact = ko.observable(gateCode.contact);
  self.entry = ko.observable(gateCode.entry);
  self.exit = ko.observable(gateCode.exit);
  self.timestamp = ko.observable(gateCode.timestamp);
  self.score = ko.observable(gateCode.score);
  self.visible = ko.observable(true);
}

// var Cat = function (data) {
//   this.numberOfClicks = ko.observable(data.numberOfClicks);
//   this.name = ko.observable(data.name);
//   this.imgSrc = ko.observable(data.imgSrc);
//   this.nicknames = ko.observableArray(data.nicknames);
//
//   this.level = ko.computed(function() {
//     var clicks = this.numberOfClicks();
//     if (clicks < 5) {
//       return 'kitten';
//     }
//     else if (clicks < 10) {
//       return 'cat';
//       }
//     else {
//       return 'tiger';
//     }
//   }, this);
// }

var ViewModel = function() {
  var self = this;
  self.query = ko.observable("");
  self.gateCodeList = ko.observableArray([]);
  gateCodes.forEach(function(gateCode){
    self.gateCodeList.push( new GateCode(gateCode) );
  });
  // This enables search capabilities
  this.queryList = ko.computed( function() {
    var filter = self.query().toLowerCase();
    if (!filter) {
      self.gateCodeList().forEach(function(gateCode){
        gateCode.visible(true);
      });
      return self.gateCodeList();
    } else {
      return ko.utils.arrayFilter(self.gateCodeList(), function(gateCode) {
        var string = gateCode.name.toLowerCase();
        var result = (string.search(filter) >= 0);
        gateCode.visible(result);
        return result;
    });
  }
}, self);
}
//
// //   $.getJSON( "data.json", function( data ) {
// //   var items = [];
// //   $.each( data, function( key, val ) {
// //     items.push( "<li id='" + key + "'>" + val + "</li>" );
// //   });
// //
// //   $( "<ul/>", {
// //     "class": "my-new-list",
// //     html: items.join( "" )
// //   }).appendTo( "body" );
// // });
//
//   this.catList = ko.observableArray([]);
//
//   initialCats.forEach(function(catItem){
//     self.catList.push( new Cat(catItem) );
//   });
//
//   this.currentCat = ko.observable( this.catList()[0]);
//
//   this.registerClick = function() {
//     self.currentCat().numberOfClicks(self.currentCat().numberOfClicks() + 1);
//   };
//
//   this.resetClick = function() {
//     this.currentCat().numberOfClicks(0);
//   };
//
//   this.hasClickedTooManyTimes = ko.computed(function() {
//     return this.currentCat().numberOfClicks() >= 3;
//   }, this);
//
//   this.setCat = function(clickedCat) {
//     self.currentCat(clickedCat);
//   };
//
//   this.jsonify = function(){
//     console.log(ko.toJSON(self.catList));
//   };
// };


ko.applyBindings( new ViewModel() );
