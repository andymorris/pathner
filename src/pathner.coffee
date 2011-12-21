class @Pathner
  constructor: ->
    @_parts = []
  toString: ->
    @_parts.join()
  moveTo: (x, y) ->
    @_parts.push "M#{x},#{y}"
    @
  closePath: ->
    @_parts.push "Z"
    @
  lineTo: (x, y) ->
    @_parts.push "L#{x},#{y}"
    @

