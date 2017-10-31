# tddkatas

Just good old tdd katas, done step by step.
Each step deserves a separate commit. 
Once it is done - just wipe it out and start over!

# js

[js](https://github.com/doctorstal/tddkatas/tree/master/js) is for Javascript katas. Karma+jasmine for tests.

# string.calculator

## Before you start
* Try not to read ahead.
* Do one task at a time. The trick is to learn to work incrementally.
* Make sure you only test for correct inputs. There is no need to test for invalid inputs for this kata.

## The kata

### Step 1: the simplest thing
Create a simple String calculator function ``add(numbers: string): number``.

* The string argument can contain 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example ``""`` or ``"1"`` or ``"1,2"``.
* Start with the simplest test case of an empty string and move to 1 and two numbers.
* Remember to solve things as simply as possible so that you force yourself to write tests you did not think about.
* Remember to refactor after each passing test.

### Step 2: handle an unknown amount of numbers
Allow the ``add()`` method to handle an unknown amount of numbers.

### Step 3: handle new lines between numbers
Allow the ``add()`` method to handle new lines between numbers (in addition to commas).

* the following input is ok:  ``"1\n2,3"`` (will equal 6)
* the following input is NOT ok:  ``"1,\n"`` (not need to prove it - just clarifying)

### Step 4: support different delimiters
Support different delimiters: to change a delimiter, the beginning of the string will contain a separate line that looks like this:   

``"//[delimiter]\n[numbers...]"``

For example ``"//;\n1;2"`` should return 3 where the default delimiter is ``';'``. 

Delimeter could be any length. So ``"//plus\n2plus2`` should return 4.

The first line is optional. 
All existing scenarios should still be supported.

### Step 5: negative numbers
Calling ``add()`` with a negative number will throw an exception ``"Negatives are not allowed"`` - and the negative that was passed.

For example ``add("1,4,-1")`` should throw an exception with the message ``"Negatives are not allowed. [-1]"``.

If there are multiple negatives, show all of them in the exception message.

Credits to [Roy Osherove](http://osherove.com/tdd-kata-1) for the original idea.

# fizz.buzz

## Problem Description

Imagine the scene. You are eleven years old, and in the five minutes before the end of the lesson, your Maths teacher decides he should make his class more “fun” by introducing a “game”. He explains that he is going to point at each pupil in turn and ask them to say the next number in sequence, starting from one. The “fun” part is that if the number is divisible by three, you instead say “Fizz” and if it is divisible by five you say “Buzz”. So now your maths teacher is pointing at all of your classmates in turn, and they happily shout “one!”, “two!”, “Fizz!”, “four!”, “Buzz!”… until he very deliberately points at you, fixing you with a steely gaze… time stands still, your mouth dries up, your palms become sweatier and sweatier until you finally manage to croak “Fizz!”. Doom is avoided, and the pointing finger moves on.

So of course in order to avoid embarassment infront of your whole class, you have to get the full list printed out so you know what to say. Your class has about 33 pupils and he might go round three times before the bell rings for breaktime. Next maths lesson is on Thursday. Get coding!

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz “.

Description comes from [codingdojo.org](http://codingdojo.org/kata/FizzBuzz/).


## archive

[archive](https://github.com/doctorstal/tddkatas/tree/master/archive) contains ActionScript katas from old days.
