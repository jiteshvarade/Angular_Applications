
function Addition(Arr : number[]) : number
{
    var iSum : number = 0;
    var iCnt : number = 0;
    for(iCnt = 0; iCnt < Arr.length; iCnt++)
    {
        iSum += Arr[iCnt];
    }
    return iSum;
}

var array : number[] = [23, 6, 7, 4, 5, 7];
var iRet : number = 0;

iRet = Addition(array);
console.log("Addition of all elements is : "+iRet);