//we know we need loop here because giving candy is repeating every 2 miles
// the starting point of the loop is 1 mile because if we start in 0 so 0 %2 ==0 then it will give candy
//the loop should stop at 6 miles
// in each iteration MilesCounter is incrementing
// we need MilesCounter as a variable
for(var MilesCounter=1; MilesCounter<=6;MilesCounter++)
{
if(MilesCounter % 2 ==0 )
    console.log("Take your candy")
}