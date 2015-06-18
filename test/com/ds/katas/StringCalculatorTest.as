/**
 * @author alexeyst
 * @e-mail doctorstal@gmail.com
 * @date 18.06.15
 * @time 20:06
 */
package com.ds.katas
{
	import org.flexunit.asserts.assertEquals;
	import org.flexunit.asserts.assertTrue;
	import org.flexunit.asserts.fail;

	public class StringCalculatorTest
	{
		private var _calc:StringCalculator;


		[Before]
		public function setUp():void
		{
			_calc = new StringCalculator();
		}


		[Test]
		public function testEmptyString():void
		{
			assertEquals(0, _calc.add(""));
		}


		[Test]
		public function testOneNumber():void
		{
			assertEquals(0, _calc.add("0"));
			assertEquals(1, _calc.add("1"));
			assertEquals(234.5, _calc.add("234.5"));
			assertTrue(isNaN(_calc.add("foo")));
		}


		[Test]
		public function testTwoNumbers():void
		{
			assertEquals(0, _calc.add("0,0"));
			assertEquals(10, _calc.add("10,0"));
			assertEquals(4, _calc.add("2,2"));
			assertEquals(15, _calc.add("7.5,7.5"));
			assertTrue(isNaN(_calc.add("fe7.5rer7.5")));
		}

		[Test]
		public function testMoreNumbers():void
		{
			assertEquals(0, _calc.add("0,0,0,0"));
			assertEquals(10, _calc.add("1,2,3,4"));
			assertEquals(100, _calc.add("25.5,0,24.5,50"));
		}


		[Test]
		public function testOtherDelimiter():void
		{
			assertEquals(1, _calc.add("0\n1"));
			assertEquals(0, _calc.add("0,0\n0,0"));
			assertEquals(10, _calc.add("1\n2,3\n4"));
			assertEquals(75.5, _calc.add("25.5\n50"));
		}

		[Test]
		public function testCustomDelimiter():void
		{
			assertEquals(1, _calc.add(";\n0;1"));
			assertEquals(21, _calc.add(";\n21"));
			assertEquals(0, _calc.add("del\n0del0\n0del0"));
			assertEquals("special character", 13, _calc.add("\\\n3\\10\n0"));
			assertTrue(isNaN(_calc.add("del\n2;3\n4")));
		}


		[Test]
		public function testNegativesException():void
		{
			try
			{
				_calc.add("0,-1");
			}catch(error:ArgumentError)
			{
				return;
			}

			fail("An exception should be thrown, when negative numbers is passed");
		}

		[Test]
		public function testNegativesExceptionOneNumber():void
		{
			try
			{
				_calc.add("-1");
			}catch(error:ArgumentError)
			{
				return;
			}

			fail("An exception should be thrown, when negative numbers is passed");
		}

		[Test]
		public function testNegativesExceptionAllNumbers():void
		{
			try
			{
				_calc.add("-0,-1\n43,-80");
			}catch(error:ArgumentError)
			{
				var msg:String = error.message;
				assertTrue(msg.indexOf("-1") != -1);
				assertTrue(msg.indexOf("-80") != -1);
				assertTrue(msg.indexOf("-0") == -1);
				assertTrue(msg.indexOf("-2") == -1);
				return;
			}

			fail("An exception should be thrown, when negative numbers is passed");
		}
	}
}
