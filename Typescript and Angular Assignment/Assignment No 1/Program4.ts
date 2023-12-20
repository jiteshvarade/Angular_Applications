
function ChkPrime(iNo : number) : boolean
{
    for(var iCnt : number = 2; iCnt <= (iNo/2); iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            return false;
        }
    }
    return true;
}

var Value : number = 11;
var bRet : boolean = false;

bRet = ChkPrime(Value);

if(bRet == true)
{
    console.log("Number is prime");
}
else
{
    console.log("Number is not prime");
}