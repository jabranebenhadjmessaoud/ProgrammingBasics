// Feature 1
function HowMuchLeftOver(numberOfPieces,numberOfPeople)
    {
        
        return (numberOfPieces-numberOfPeople)
    }
var reslt=HowMuchLeftOver(12,5)

// Feature 2
if (reslt==0)
    console.log("No leftovers for you!")
    else if((reslt<=2)&&(reslt>0))
        console.log("You have some leftovers") 
    else if((reslt>2)&&(reslt<=5))
        console.log("You have leftovers to share")
else console.log("Hold another party!")    