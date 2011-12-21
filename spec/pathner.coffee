describe "Pathner", ->

  skip = ["constructor", "toString"]
  for name, member of Pathner.prototype
    if typeof(member) is "function" and not _(skip).include name
      describe ".#{name}", ->
        it "returns the Pathner", ->
          p = new Pathner()
          expect(p[name]()).toEqual p

        it "pushes to _parts", ->
          p = new Pathner()
          len = p._parts.length
          expect(p[name]()._parts.length).toBeGreaterThan len

  describe ".moveTo", ->
    it "generates the right string", ->
      expect(new Pathner().moveTo(1, 2)._parts).toEqual ["M1,2"]

  describe ".lineTo", ->
    it "generates the right string", ->
      expect(new Pathner().lineTo(1, 2)._parts).toEqual ["L1,2"]

  describe ".closePath", ->
    it "generates the right string", ->
      expect(new Pathner().closePath()._parts).toEqual ["Z"]
