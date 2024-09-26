// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];



// Loop 1 : printing each number
    for(var i=0;i<arr1.length;i++)
    {
        console.log(arr1[i]) ;
    }


// Loop 2 :   Printing the sum of numbers in array
    var sum=0 ;
    for(var i=0;i<arr1.length;i++)
        {
             sum=sum+(arr1[i]+i) ;
        }


// Loop 3 :Print numbers only heigher than 5
    for(var i=0;i<arr1.length;i++)
        {
            if(arr1[i]>5) 
            console.log(arr1[i]) ;
        }



// Ninja Bonus Quest

        for(var i=0;i<arr1.length;i++)
            {
                if(arr1[i]>5) 
                console.log(arr1[i])
                else arr1[i]="No Dice" 
            }

