describe('Seed', function(){
  var x    = 123
  var y    = 456
  var type = SEED

  var seed

  beforeEach(function(){
    seed = new Seed(x, y, type)
  })

  it('has x value', function(){
    expect(seed.x).toEqual(x)
  })

  it('has y value', function(){
    expect(seed.y).toEqual(y)
  })

  describe('#is()', function(){
    it("is a '" + type + "'", function(){
      expect(seed.is(type)).toBe(true)
    })

    it("is not a 'thing'", function(){
      expect(seed.is('thing')).toBe(false)
    })
  })

  describe('#age()', function(){
    it('does nothing if seed is dead', function(){
      var seed = new Seed(0, 0, DEAD)
      seed.age()
      expect(seed.is(DEAD)).toBe(true)
    })

    it('does nothing if fate decides to pass', function(){
      function fate(){ return false }
      var seed = new Seed(0, 0, SEED, fate)
      seed.age()
      expect(seed.is(SEED)).toBe(true)
    })

    it('moves to next stage of life if fate leads', function(){
      function fate(){ return true }
      var seed = new Seed(0, 0, SEED, fate)
      seed.age()
      expect(seed.is(SEEDLING)).toBe(true)
    })
  })

  describe('#draw()', function(){
    it('invoke respective drawer with coords', function(){
      var type = SEED
      spyOn(SEED_DRAWERS, type)

      var x = 123, y = 456
      var seed = new Seed(x, y, type)

      seed.draw()

      expect(SEED_DRAWERS[type]).toHaveBeenCalledWith(x, y)
    })
  })
})
