Find All Duplicates
Write a function (or static method in the case of Java) that accepts a list of integers and returns a list of only those integers that appear more than once.

nested for loop:
you would start by going over each element in the list. see if the rest of list has a match, if it does add it to duplictes.
this works for smaller datasets, but having an o(n^2), bigger sets can degrade performance.

dictionary:

make an empty dictionary to store the occurences of each number.
for each integer, if the integer is not already in the dictionary, add it with a count of 1, if its already in the dictionary, increment its count.
this way has a time complexity of O(n), because you only need to go through the list once, and is always efficient.
