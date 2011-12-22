describe "Pathner", ->
  p = null
  beforeEach ->
    p = new Pathner()

  describe ".toString", ->
    p = null
    beforeEach ->
      p._parts.push "a"
      p._parts.push "b"

    it "joins the parts", ->
      expect(p.toString()).toEqual "ab"

    it "is aliased as .path", ->
      expect(p.path()).toEqual p.toString()

  describe ".moveTo", ->
    it "generates the correct string", ->
      expect(p.moveTo(1, 2)._parts[0]).toEqual "M1,2"

  describe ".lineTo", ->
    it "generates the correct string", ->
      expect(p.lineTo(1, 2)._parts[0]).toEqual "L1,2"

  describe ".closePath", ->
    it "generates the correct string", ->
      expect(p.closePath()._parts[0]).toEqual "Z"

  describe ".horizontalLineTo", ->
    it "generates the correct string", ->
      expect(p.horizontalLineTo(2)._parts[0]).toEqual "H2"

  describe ".verticalLineTo", ->
    it "generates the correct string", ->
      expect(p.verticalLineTo(3)._parts[0]).toEqual "V3"

  describe ".curveTo", ->
    it "generates the correct string", ->
      expect(p.curveTo(1, 2, 3, 4, 5, 6)._parts[0]).toEqual "C1,2,3,4,5,6"

  describe ".smoothCurveTo", ->
    it "generates the correct string", ->
      expect(p.smoothCurveTo(1, 2, 3, 4)._parts[0]).toEqual "S1,2,3,4"

  describe ".quadraticBezierTo", ->
    it "generates the correct string", ->
      expect(p.quadraticBezierTo(1,2,3,4)._parts[0]).toEqual "Q1,2,3,4"

  describe ".smoothQuadraticBezierTo", ->
    it "generates the correct string", ->
      expect(p.smoothQuadraticBezierTo(1,2)._parts[0]).toEqual "T1,2"

  describe ".ellipticalArc", ->
    it "generates the correct string", ->
      expect(p.ellipticalArc(1,2,3,1,0,6,7)._parts[0]).toEqual "A1,2,3,1,0,6,7"
    it "converts flag params to 1 and 0", ->
      expect(p.ellipticalArc(1,2,3,true,false,6,7)._parts[0]).toEqual "A1,2,3,1,0,6,7"

  describe ".catmullRomTo", ->
    it "generates the correct string", ->
      expect(p.catmullRomTo(1,2,3,4)._parts[0]).toEqual "R1,2,3,4"

  skip = ["constructor", "toString", "path", "_push"]
  for name, member of Pathner.prototype
    if _.isFunction(member) and not _(skip).include name
      describe ".#{name}", ->
        it "returns the Pathner", ->
          expect(p[name]()).toEqual p

        it "pushes to _parts", ->
          len = p._parts.length
          expect(p[name]()._parts.length).toBeGreaterThan len
