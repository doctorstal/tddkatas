/**
 * @author alexeyst
 * @e-mail doctorstal@gmail.com
 * @date 17.06.15
 * @time 23:34
 */
package com.ds.katas
{
	public class StringCalculator
	{
		public function StringCalculator()
		{
		}

		public function add(numbers:String):Number
		{
			var res:Number = 0;

			var regStr:String = ",|\n";
			var lineEnd:int = numbers.indexOf("\n");
			var line1:String = numbers.substring(0, lineEnd);
			if(isNaN(Number(line1)))
			{
				regStr += "|" + line1.replace(/(\^|\$|\\|\.|\*|\+|\?|\(|\)|\[|\]|\{|\}|\|)/x, "\\$1");
				numbers = numbers.substr(lineEnd);
			}
			var regExp:RegExp = new RegExp(regStr);
			var numArr:Array = numbers.split(regExp);

			for (var i:int = 0; i < numArr.length; i++)
			{
				res += Number(numArr[i]);
			}

			return res;
		}
	}
}
