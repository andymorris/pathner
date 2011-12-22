(function() {
  this.Pathner = (function() {
    function Pathner() {
      this._parts = [];
    }
    Pathner.prototype.toString = function() {
      return this._parts.join("");
    };
    Pathner.prototype.path = function() {
      return this.toString();
    };
    Pathner.prototype._push = function(item) {
      this._parts.push(item);
      return this;
    };
    Pathner.prototype.moveTo = function(x, y) {
      return this._push("M" + x + "," + y);
    };
    Pathner.prototype.closePath = function() {
      return this._push("Z");
    };
    Pathner.prototype.horizontalLineTo = function(x) {
      return this._push("H" + x);
    };
    Pathner.prototype.verticalLineTo = function(y) {
      return this._push("V" + y);
    };
    Pathner.prototype.lineTo = function(x, y) {
      return this._push("L" + x + "," + y);
    };
    Pathner.prototype.curveTo = function(x1, y1, x2, y2, x, y) {
      return this._push("C" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + x + "," + y);
    };
    Pathner.prototype.smoothCurveTo = function(x2, y2, x, y) {
      return this._push("S" + x2 + "," + y2 + "," + x + "," + y);
    };
    Pathner.prototype.quadraticBezierTo = function(x1, y1, x, y) {
      return this._push("Q" + x1 + "," + y1 + "," + x + "," + y);
    };
    Pathner.prototype.smoothQuadraticBezierTo = function(x, y) {
      return this._push("T" + x + "," + y);
    };
    Pathner.prototype.ellipticalArc = function(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
      return this._push("A" + rx + "," + ry + "," + xAxisRotation + "," + largeArcFlag + "," + sweepFlag + "," + x + "," + y);
    };
    Pathner.prototype.catmullRomTo = function(x1, y1, x, y) {
      return this._push("R" + x1 + "," + y1 + "," + x + "," + y);
    };
    return Pathner;
  })();
}).call(this);
