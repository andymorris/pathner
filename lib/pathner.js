(function() {
  this.Pathner = (function() {
    function Pathner() {
      this._parts = [];
    }
    Pathner.prototype.toString = function() {
      return this._parts.join("");
    };
    Pathner.prototype.moveTo = function(x, y) {
      this._parts.push("M" + x + "," + y);
      return this;
    };
    Pathner.prototype.closePath = function() {
      this._parts.push("Z");
      return this;
    };
    Pathner.prototype.horizontalLineTo = function(x) {
      this._parts.push("H" + x);
      return this;
    };
    Pathner.prototype.verticalLineTo = function(y) {
      this._parts.push("V" + y);
      return this;
    };
    Pathner.prototype.lineTo = function(x, y) {
      this._parts.push("L" + x + "," + y);
      return this;
    };
    return Pathner;
  })();
}).call(this);
