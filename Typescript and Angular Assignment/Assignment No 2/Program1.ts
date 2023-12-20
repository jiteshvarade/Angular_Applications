
function Maximum(Arr : number[]) : number
{
    var iMax : number = Arr[0];
    var iCnt : number = 0;
    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > iMax)
        {
            iMax = Arr[iCnt];
        }
    }
    return iMax;
}

var array : number[] = [23, 89 ,6, 29, 56, 45, 77, 32];
var iRet : number = 0;

iRet = Maximum(array);
console.log("Maximum number is : "+iRet);