
function FindSecondMax(Arr : number[]) : number
{
    var iMax : number = Arr[0];
    var iSecondMax : number = 0;
    var iCnt : number = 0;

    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        if(Arr[iCnt] > iMax)
        {
            iSecondMax = iMax;
            iMax = Arr[iCnt];
        }
        else if((Arr[iCnt] > iSecondMax) && (Arr[iCnt] < iMax))
        {
            iSecondMax = Arr[iCnt];
        }
    }

    return iSecondMax;
}

var array : number[] = [23, 89 ,6, 29, 56, 45, 77, 32];
var iRet : number = 0;

iRet = FindSecondMax(array);
console.log("Second maximum number in the array is : "+iRet);