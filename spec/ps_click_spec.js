describe('PS.Click', function(){
  var x = 123, y = 456
  var type = SEED
  var drawer = SEED_DRAWERS[type]

  beforeEach(function(){
    SEED_DRAWERS[type] = function(){}
  })

  afterEach(function(){
    SEED_DRAWERS[type] = drawer
    SEEDS = []
  })

  it('adds a new seed', function(){
    expect(SEEDS.length).toBe(0)
    PS.Click(x, y)
    expect(SEEDS.length).toBe(1)
  })

  it('sets the seeds coords', function(){
    PS.Click(x, y)

    expect(SEEDS[0].x).toBe(x)
    expect(SEEDS[0].y).toBe(y)
  })

  it('is a SEED seed', function(){
    PS.Click(x, y)

    expect(SEEDS[0].is(SEED)).toBe(true)
  })

  it('draws the seed', function(){
    spyOn(SEED_DRAWERS, type)

    PS.Click(x, y)

    expect(SEED_DRAWERS[type]).toHaveBeenCalled()
  })
})
