
function Area(Radius : number, PI : number = 3.14) : number
{
    return (PI * Radius * Radius);
}

var Value : number = 5;
var iRet : number = 0;

iRet = Area(Value);
console.log("Area of circle is : "+iRet);