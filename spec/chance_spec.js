describe('Chance', function(){
  var probability = 0.5

  describe('#fate()', function(){
    it('is fate when random value is less than given probability', function(){
      var chance = new Chance(probability, function(){
        return probability - 0.1
      })

      expect(chance.fate()).toBe(true)
    })

    it('is fate when random value is equal to the given probability', function(){
      var chance = new Chance(probability, function(){
        return probability
      })

      expect(chance.fate()).toBe(true)
    })

    it('is not fate when random value is greater than the given probability', function(){
      var chance = new Chance(probability, function(){
        return probability + 0.1
      })

      expect(chance.fate()).toBe(false)
    })
  })
})
