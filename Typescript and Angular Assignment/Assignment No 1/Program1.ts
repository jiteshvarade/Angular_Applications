
function Maximum(iNo1 : number, iNo2 : number, iNo3 : number) : number
{
    var iMax : number = iNo1;
    if((iNo2 > iMax) && (iNo2 > iNo3))
    {
        return iNo2;
    }
    else if((iNo3 > iMax) && (iNo3 > iNo2))
    {
        return iNo2;
    }
    else
    {
        return iMax;
    }
}

var iValue1 : number = 23;
var iValue2 : number = 89;
var iValue3 : number = 6;
var iRet : number = 0;

iRet = Maximum(iValue1, iValue2, iValue3);
console.log("Maximum number is : "+iRet);