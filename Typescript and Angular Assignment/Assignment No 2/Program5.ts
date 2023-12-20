
function ChkString(Str : string) : boolean
{
    var ToFind : string = "Marvellous";
    
    if(Str.includes(ToFind))
    {
        return true;
    }
    else
    {
        return false;
    }
}

var Value : string = "I am a memeber of Marvellous family";
var bRet : boolean = false;

bRet = ChkString(Value);

if(bRet == true)
{
    console.log("String contains Marvellous");
}
else
{
    console.log("String does not contain Marvellous");
}