(function() {
  this.Pathner = (function() {
    function Pathner() {
      this._parts = [];
    }
    Pathner.prototype.toString = function() {
      return this._parts.join();
    };
    Pathner.prototype.moveTo = function(x, y) {
      this._parts.push("M" + x + "," + y);
      return this;
    };
    Pathner.prototype.closePath = function() {
      this._parts.push("Z");
      return this;
    };
    Pathner.prototype.lineTo = function(x, y) {
      this._parts.push("L" + x + "," + y);
      return this;
    };
    return Pathner;
  })();
}).call(this);
