(function() {
  describe("Pathner", function() {
    var member, name, skip, _ref;
    skip = ["constructor", "toString"];
    _ref = Pathner.prototype;
    for (name in _ref) {
      member = _ref[name];
      if (typeof member === "function" && !_(skip).include(name)) {
        describe("." + name, function() {
          it("returns the Pathner", function() {
            var p;
            p = new Pathner();
            return expect(p[name]()).toEqual(p);
          });
          return it("pushes to _parts", function() {
            var len, p;
            p = new Pathner();
            len = p._parts.length;
            return expect(p[name]()._parts.length).toBeGreaterThan(len);
          });
        });
      }
    }
    describe(".moveTo", function() {
      return it("generates the right string", function() {
        return expect(new Pathner().moveTo(1, 2)._parts[0]).toEqual("M1,2");
      });
    });
    describe(".lineTo", function() {
      return it("generates the right string", function() {
        return expect(new Pathner().lineTo(1, 2)._parts[0]).toEqual("L1,2");
      });
    });
    describe(".closePath", function() {
      return it("generates the right string", function() {
        return expect(new Pathner().closePath()._parts[0]).toEqual("Z");
      });
    });
    describe(".horizontalLineTo", function() {
      return it("generates the correct string", function() {
        return expect(new Pathner().horizontalLineTo(2)._parts[0]).toEqual("H2");
      });
    });
    describe(".verticalLineTo", function() {
      return it("generates the correct string", function() {
        return expect(new Pathner().verticalLineTo(3)._parts[0]).toEqual("V3");
      });
    });
    return describe(".toString", function() {
      return it("joins the parts", function() {
        var p;
        p = new Pathner();
        p._parts.push("a");
        p._parts.push("b");
        return expect(p.toString()).toEqual("ab");
      });
    });
  });
}).call(this);
