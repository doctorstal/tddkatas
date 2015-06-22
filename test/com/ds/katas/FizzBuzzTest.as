/**
 * @author alexeyst
 * @e-mail doctorstal@gmail.com
 * @date 19.06.15
 * @time 9:05
 */
package com.ds.katas
{
	import org.flexunit.asserts.assertEquals;

	public class FizzBuzzTest
	{
		private var _fizzBuzz:FizzBuzz;
		private const EXPECTED_FIZZ_BUZZ_START:String = "12Fizz4BuzzFizz78Fizz";
		private const EXPECTED_FIZZ_BUZZ_END:String = "Fizz94BuzzFizz9798FizzBuzz";

		[Before]
		public function setUp():void
		{
			_fizzBuzz = new FizzBuzz();
		}


		[Test]
		public function testNumbers():void
		{
			assertEquals("1", _fizzBuzz.getSingleOutput(1));
			assertEquals("2", _fizzBuzz.getSingleOutput(2));
			assertEquals("7", _fizzBuzz.getSingleOutput(7));
			assertEquals("97", _fizzBuzz.getSingleOutput(97));
		}


		[Test]
		public function testFizz():void
		{
			assertEquals("Fizz", _fizzBuzz.getSingleOutput(3));
			assertEquals("Fizz", _fizzBuzz.getSingleOutput(6));
			assertEquals("Fizz", _fizzBuzz.getSingleOutput(9));
			assertEquals("Fizz", _fizzBuzz.getSingleOutput(48));
			assertEquals("Fizz", _fizzBuzz.getSingleOutput(99));
		}

		[Test]
		public function testBuzz():void
		{
			assertEquals("Buzz", _fizzBuzz.getSingleOutput(5));
			assertEquals("Buzz", _fizzBuzz.getSingleOutput(10));
			assertEquals("Buzz", _fizzBuzz.getSingleOutput(20));
			assertEquals("Buzz", _fizzBuzz.getSingleOutput(25));
			assertEquals("Buzz", _fizzBuzz.getSingleOutput(95));
			assertEquals("Buzz", _fizzBuzz.getSingleOutput(100));
		}

		[Test]
		public function testFizzBuzz():void
		{
			assertEquals("FizzBuzz", _fizzBuzz.getSingleOutput(15));
			assertEquals("FizzBuzz", _fizzBuzz.getSingleOutput(30));
			assertEquals("FizzBuzz", _fizzBuzz.getSingleOutput(45));
			assertEquals("FizzBuzz", _fizzBuzz.getSingleOutput(75));
		}


		[Test]
		public function testOutput():void
		{
			var output:String = _fizzBuzz.getOutput();
			assertEquals(0, output.indexOf(EXPECTED_FIZZ_BUZZ_START));
			assertEquals(output.length - EXPECTED_FIZZ_BUZZ_END.length, output.indexOf(EXPECTED_FIZZ_BUZZ_END));
		}
	}
}
