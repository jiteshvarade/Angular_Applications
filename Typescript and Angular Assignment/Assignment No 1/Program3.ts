
function DisplayFactors(iNo : number) : void
{
    for(var iCnt : number = 1; iCnt <= (iNo/2); iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            process.stdout.write(iCnt+"\t");
        }
    }
}

var Value : number = 20;

DisplayFactors(Value);