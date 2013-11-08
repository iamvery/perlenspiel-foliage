describe('PS.Tick', function(){
  var type = SEED
  var seed = new Seed(0, 0, type)
  var drawer = SEED_DRAWERS[type]

  beforeEach(function(){
    SEED_DRAWERS[type] = function(){}
    SEEDS.push(seed)
  })

  afterEach(function(){
    SEED_DRAWERS[type] = drawer
    SEEDS = []
  })

  it('ages each seed', function(){
    spyOn(seed, 'age')

    PS.Tick()

    expect(seed.age).toHaveBeenCalled()
  })

  it('draws each seed', function(){
    spyOn(seed, 'draw')

    PS.Tick()

    expect(seed.draw).toHaveBeenCalled()
  })
})
