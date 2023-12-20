
function ChkAmstrong(iNo : number) : boolean
{
    var iNoCopy : number = iNo;
    var iSum : number = 0;
    var iDigit : number = 0;
    while(iNoCopy != 0)
    {
        iDigit = iNoCopy % 10;
        iDigit = iDigit | 0;
        iSum = iSum + (iDigit*iDigit*iDigit);
        iNoCopy = iNoCopy / 10;
    }

    if(iSum == iNo)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var iValue : number = 153;
var bRet : boolean = false;

bRet = ChkAmstrong(iValue);
if(bRet == true)
{
    console.log("Number is amstrong number");
}
else
{
    console.log("Number is not a amstrong number");
}
