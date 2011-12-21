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
      expect(new Pathner().moveTo(1, 2)._parts[0]).toEqual "M1,2"

  describe ".lineTo", ->
    it "generates the right string", ->
      expect(new Pathner().lineTo(1, 2)._parts[0]).toEqual "L1,2"

  describe ".closePath", ->
    it "generates the right string", ->
      expect(new Pathner().closePath()._parts[0]).toEqual "Z"

  describe ".horizontalLineTo", ->
    it "generates the correct string", ->
      expect(new Pathner().horizontalLineTo(2)._parts[0]).toEqual "H2"

  describe ".verticalLineTo", ->
    it "generates the correct string", ->
      expect(new Pathner().verticalLineTo(3)._parts[0]).toEqual "V3"

  describe ".toString", ->
    it "joins the parts", ->
      p = new Pathner()
      p._parts.push "a"
      p._parts.push "b"
      expect(p.toString()).toEqual "ab"
