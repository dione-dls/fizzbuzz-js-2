describe('Fizzbuzz', function(){

  var fizzbuzz = new Fizzbuzz ()

  describe('#play', function(){
    it('returns "fizz" when passed 3', function(){
      expect(fizzbuzz.play(3)).toEqual("fizz")
    });

    it('returns "buzz" when passed 5', function (){
      expect(fizzbuzz.play(5)).toEqual("buzz")
    });

    it('returns "fizzbuzz" when passed 15', function(){
      expect(fizzbuzz.play(15)).toEqual("fizzbuzz")
    });

    it('returns 2 when passed 2', function(){
      expect(fizzbuzz.play(2)).toEqual(2)
    });
  });
});
