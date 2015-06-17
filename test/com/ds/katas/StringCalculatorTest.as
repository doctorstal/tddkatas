/**
 * @author alexeyst
 * @e-mail doctorstal@gmail.com
 * @date 17.06.15
 * @time 23:36
 */
package com.ds.katas
{
	import org.flexunit.asserts.assertEquals;

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
			assertEquals(1, _calc.add("1"));
			assertEquals(315, _calc.add("315"));
		}


		[Test]
		public function testTwoNumbers():void
		{
			assertEquals(4, _calc.add("2,2"));
			assertEquals(14, _calc.add("8,6"));
			assertEquals(566, _calc.add("0,566"));
			assertEquals(566.56, _calc.add("0.56,566"));
		}


		[Test]
		public function testMoreNumbers():void
		{
			assertEquals(115, _calc.add("25.5,24.5,65"));
			assertEquals(115.5, _calc.add("25.5,24.5,65,.5"));
			assertEquals(115, _calc.add("25.5,24.5,65,0"));
			assertEquals(0, _calc.add("0,0,0,0"));
		}


		[Test]
		public function testOtherSeparator():void
		{
			assertEquals(25, _calc.add("2\n23"));
			assertEquals(125, _calc.add("100\n2\n23"));
			assertEquals(225, _calc.add("120\n80,2\n23"));
		}


		[Test]
		public function testDelimiterLine():void
		{
			assertEquals(";", 3, _calc.add(";\n1;2"));
			assertEquals("long word", 3, _calc.add("delimiter\n1delimiter2"));
			assertEquals("special character",3, _calc.add("\\\n1\\2"));
		}
	}
}
