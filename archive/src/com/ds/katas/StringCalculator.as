/**
 * @author alexeyst
 * @e-mail doctorstal@gmail.com
 * @date 18.06.15
 * @time 20:04
 */
package com.ds.katas
{
	public class StringCalculator
	{
		private var _negativeNumbers:Array = [];
		public function StringCalculator()
		{
		}

		public function add(numbers:String):Number
		{
			_negativeNumbers.length = 0;
			var parsed:Object = parseInput(numbers);
			var delimiters:Array = parsed.delimiters;
			var str:String = parsed.str;
			var res:Number;

			if(!hasDelimiters(str, delimiters))
			{
				res = parseNumber(str);
			}else
			{
				var numArr:Array = splitByDelimiters(str, delimiters);
				res = calcArraySum(numArr);
			}
			if(_negativeNumbers.length > 0)
			{
				throw new ArgumentError("Negatives is not supported! ("+_negativeNumbers.concat(", ")+")");
			}

			return res;
		}

		private function parseInput(numbers:String):Object
		{
			var delimiters:Array = [",", "\n"];
			var line1End:int = numbers.indexOf("\n");
			if (line1End != -1)
			{
				var s1:String = numbers.substr(0, line1End);
				var s2:String = numbers.substr(line1End + 1);
				if (!hasDelimiters(s1, delimiters) && isNaN(Number(s1)))
				{
					delimiters.push(s1);
					numbers = s2;
				}
			}
			return {str:numbers, delimiters:delimiters};
		}

		private function splitByDelimiters(numbers:String, delimiters:Array):Array
		{
			return splitStringsByDelimiters([numbers], delimiters);
		}

		private function splitStringsByDelimiters(numArr:Array, delimiters:Array):Array
		{
			var resArr:Array = numArr;
			for (var i:int = 0; i < delimiters.length; i++)
			{
				var delimiter:String = delimiters[i];
				var resArr2:Array = [];
				for (var j:int = 0; j < resArr.length; j++)
				{
					resArr2 = resArr2.concat(resArr[j].split(delimiter));
				}
				resArr = resArr2;
			}
			return resArr;
		}

		private function hasDelimiters(numbers:String, delimiters:Array):Boolean
		{
			for (var i:int = 0; i < delimiters.length; i++)
			{
				if( numbers.indexOf(delimiters[i]) != -1)
				{
					return true;
				}
			}
			return false;
		}

		private function calcArraySum(numArr:Array):Number
		{
			var res:Number = 0;
			for (var i:int = 0; i < numArr.length; i++)
			{
				res += parseNumber(numArr[i]);

			}
			return res;
		}

		private function parseNumber(str:String):Number
		{
			var num:Number = Number(str);
			if(num < 0)
			{
				_negativeNumbers.push(num);
			}
			return num;
		}
	}
}
