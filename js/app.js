var ViewModel = function() {
  this.numberOfClicks = ko.observable(0);

  this.registerClick = function() {
    this.numberOfClicks(this.numberOfClicks() + 1);
  };
}

ko.applyBindings( new ViewModel());
