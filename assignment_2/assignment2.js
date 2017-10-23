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