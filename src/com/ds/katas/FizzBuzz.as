/**
 * @author alexeyst
 * @e-mail doctorstal@gmail.com
 * @date 19.06.15
 * @time 9:05
 */
package com.ds.katas
{
	public class FizzBuzz
	{
		public function FizzBuzz()
		{
		}


		public function getSingleOutput(num:int):String
		{
			var res:String = "";
			var isFizz:Boolean = num % 3 == 0;
			var isBuzz:Boolean = num % 5 == 0;
			if(isFizz)
			{
				res += "Fizz";
			}
			if(isBuzz)
			{
				res += "Buzz";
			}

			if(!isFizz&&!isBuzz)
			{
				res = String(num);
			}
			return res;
		}

		public function getOutput():String
		{
			var res:String = "";
			for (var i:int = 0; i < 100; i++)
			{
				res += getSingleOutput(i+1);
			}
			return res;
		}
	}
}
