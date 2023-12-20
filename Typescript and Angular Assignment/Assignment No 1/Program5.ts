
function Fibonacci(iNo : number) : void
{
    var PrecedingNo1 : number = 0;
    var PrecedingNo2 : number = 0;
    var Fibonacci : number = 1;

    while(Fibonacci <= iNo)
    {
        process.stdout.write(Fibonacci+"\t");
        PrecedingNo2 = PrecedingNo1;
        PrecedingNo1 = Fibonacci;
        Fibonacci = PrecedingNo1 + PrecedingNo2;
    }
}

var Value : number = 21;
Fibonacci(Value);