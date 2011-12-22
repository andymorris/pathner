class @Pathner
  constructor: ->
    @_parts = []

  toString: ->
    @_parts.join ""

  path: ->
    @toString()

  _push: (item) ->
    @_parts.push item
    @

  moveTo: (x, y) ->
    @_push "M#{x},#{y}"

  closePath: ->
    @_push "Z"

  horizontalLineTo: (x) ->
    @_push "H#{x}"

  verticalLineTo: (y) ->
    @_push "V#{y}"

  lineTo: (x, y) ->
    @_push "L#{x},#{y}"

  curveTo: (x1, y1, x2, y2, x, y) ->
    @_push "C#{x1},#{y1},#{x2},#{y2},#{x},#{y}"

  smoothCurveTo: (x2, y2, x, y) ->
    @_push "S#{x2},#{y2},#{x},#{y}"

  quadraticBezierTo: (x1, y1, x, y) ->
    @_push "Q#{x1},#{y1},#{x},#{y}"

  smoothQuadraticBezierTo: (x, y) ->
    @_push "T#{x},#{y}"

  ellipticalArc: (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) ->
    @_push "A#{rx},#{ry},#{xAxisRotation},#{largeArcFlag},#{sweepFlag},#{x},#{y}"

  catmullRomTo: (x1, y1, x, y) ->
    @_push "R#{x1},#{y1},#{x},#{y}"
