var Pathner = require("../src/pathner");

describe("Pathner", function() {
  var p;

  beforeEach(function() {
    p = new Pathner();
  });

  describe(".toString", function() {
    beforeEach(function() {
      p._parts.push("a");
      p._parts.push("b");
    });

    it("joins the parts", function() {
      expect(p.toString()).toEqual("ab");
    });

    it("is aliased as .path", function() {
      expect(p.path()).toEqual(p.toString());
    });
  });

  describe(".moveTo", function() {
    it("generates the correct string", function() {
      expect(p.moveTo(1, 2)._parts[0]).toEqual("M1,2");
    });
  });

  describe(".lineTo", function() {
    it("generates the correct string", function() {
      expect(p.lineTo(1, 2)._parts[0]).toEqual("L1,2");
    });
  });

  describe(".closePath", function() {
    it("generates the correct string", function() {
      expect(p.closePath()._parts[0]).toEqual("Z");
    });
  });

  describe(".horizontalLineTo", function() {
    it("generates the correct string", function() {
      expect(p.horizontalLineTo(2)._parts[0]).toEqual("H2");
    });
  });

  describe(".verticalLineTo", function() {
    it("generates the correct string", function() {
      expect(p.verticalLineTo(3)._parts[0]).toEqual("V3");
    });
  });

  describe(".curveTo", function() {
    it("generates the correct string", function() {
      expect(p.curveTo(1, 2, 3, 4, 5, 6)._parts[0]).toEqual("C1,2,3,4,5,6");
    });
  });

  describe(".smoothCurveTo", function() {
    it("generates the correct string", function() {
      expect(p.smoothCurveTo(1, 2, 3, 4)._parts[0]).toEqual("S1,2,3,4");
    });
  });

  describe(".quadraticBezierTo", function() {
    it("generates the correct string", function() {
      expect(p.quadraticBezierTo(1, 2, 3, 4)._parts[0]).toEqual("Q1,2,3,4");
    });
  });

  describe(".smoothQuadraticBezierTo", function() {
    it("generates the correct string", function() {
      expect(p.smoothQuadraticBezierTo(1, 2)._parts[0]).toEqual("T1,2");
    });
  });

  describe(".ellipticalArc", function() {
    it("generates the correct string", function() {
      expect(p.ellipticalArc(1, 2, 3, 1, 0, 6, 7)._parts[0]).toEqual("A1,2,3,1,0,6,7");
    });
    it("converts flag params to 1 and 0", function() {
      expect(p.ellipticalArc(1, 2, 3, true, false, 6, 7)._parts[0]).toEqual("A1,2,3,1,0,6,7");
    });
  });

  describe(".catmullRomTo", function() {
    it("generates the correct string", function() {
      expect(p.catmullRomTo(1, 2, 3, 4)._parts[0]).toEqual("R1,2,3,4");
    });
  });

  var skip = ["constructor", "toString", "path", "_push"];
  for (var name in Pathner.prototype) {
    var member = Pathner.prototype[name];
    if (typeof member === "function" && skip.indexOf(name) < 0) {
      describe("." + name, function() {
        it("returns the Pathner", function() {
          expect(p[name]()).toEqual(p);
        });

        it("pushes to _parts", function() {
          var len = p._parts.length;
          expect(p[name]()._parts.length).toBeGreaterThan(len);
        });
      });
    }
  }
});
