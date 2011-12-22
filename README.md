Pathner
=======

Pathner is a tiny library to make SVG path string generation readable. Instead
of writing this:

    "M" + x + "," + y + "L" + x2 + "," + y2 + "T" + x3 + "," + y3

write this:

    new Pathner().moveTo(x, y).lineTo(x2, y2).smoothQuadraticBezierTo(x3, y3).path()

Pathner was originally written to make working with the
[RaphaelJS](http://raphaeljs.com/) `Paper.path` method easier, but is in no way
related and can be used with any code that generates SVG markup.
