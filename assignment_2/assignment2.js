/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
for (var number = 0;number <= 100;number=number+1)
    console.log(number);



/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var count="#"
while (count.length <=7) {
    console.log(count);
    count=count + "#";
}

/* the basic explanation of the functioning of the program.   You initalize the variable count as a string with the single hashtag in it.   The using a While loop,
you first check the length of the count variable and make sure it is less than or equal to 7.   If it is you use the console.log command to output count and then add
(or append) another hashtage to the count variable string.   Once the variable count has a length of greater than 7 the program will stop executing the while loop
*/
