(function() {
  describe("Pathner", function() {
    var member, name, p, skip, _ref, _results;
    p = null;
    beforeEach(function() {
      return p = new Pathner();
    });
    describe(".toString", function() {
      p = null;
      beforeEach(function() {
        p._parts.push("a");
        return p._parts.push("b");
      });
      it("joins the parts", function() {
        return expect(p.toString()).toEqual("ab");
      });
      return it("is aliased as .path", function() {
        return expect(p.path()).toEqual(p.toString());
      });
    });
    describe(".moveTo", function() {
      return it("generates the correct string", function() {
        return expect(p.moveTo(1, 2)._parts[0]).toEqual("M1,2");
      });
    });
    describe(".lineTo", function() {
      return it("generates the correct string", function() {
        return expect(p.lineTo(1, 2)._parts[0]).toEqual("L1,2");
      });
    });
    describe(".closePath", function() {
      return it("generates the correct string", function() {
        return expect(p.closePath()._parts[0]).toEqual("Z");
      });
    });
    describe(".horizontalLineTo", function() {
      return it("generates the correct string", function() {
        return expect(p.horizontalLineTo(2)._parts[0]).toEqual("H2");
      });
    });
    describe(".verticalLineTo", function() {
      return it("generates the correct string", function() {
        return expect(p.verticalLineTo(3)._parts[0]).toEqual("V3");
      });
    });
    describe(".curveTo", function() {
      return it("generates the correct string", function() {
        return expect(p.curveTo(1, 2, 3, 4, 5, 6)._parts[0]).toEqual("C1,2,3,4,5,6");
      });
    });
    describe(".smoothCurveTo", function() {
      return it("generates the correct string", function() {
        return expect(p.smoothCurveTo(1, 2, 3, 4)._parts[0]).toEqual("S1,2,3,4");
      });
    });
    describe(".quadraticBezierTo", function() {
      return it("generates the correct string", function() {
        return expect(p.quadraticBezierTo(1, 2, 3, 4)._parts[0]).toEqual("Q1,2,3,4");
      });
    });
    describe(".smoothQuadraticBezierTo", function() {
      return it("generates the correct string", function() {
        return expect(p.smoothQuadraticBezierTo(1, 2)._parts[0]).toEqual("T1,2");
      });
    });
    describe(".ellipticalArc", function() {
      return it("generates the correct string", function() {
        return expect(p.ellipticalArc(1, 2, 3, 1, 0, 6, 7)._parts[0]).toEqual("A1,2,3,1,0,6,7");
      });
    });
    describe(".catmullRomTo", function() {
      return it("generates the correct string", function() {
        return expect(p.catmullRomTo(1, 2, 3, 4)._parts[0]).toEqual("R1,2,3,4");
      });
    });
    skip = ["constructor", "toString", "path"];
    _ref = Pathner.prototype;
    _results = [];
    for (name in _ref) {
      member = _ref[name];
      _results.push(typeof member === "function" && !_(skip).include(name) ? describe("." + name, function() {
        it("returns the Pathner", function() {
          return expect(p[name]()).toEqual(p);
        });
        return it("pushes to _parts", function() {
          var len;
          len = p._parts.length;
          return expect(p[name]()._parts.length).toBeGreaterThan(len);
        });
      }) : void 0);
    }
    return _results;
  });
}).call(this);
