
class Arithmetic
{
    private iNo1 : number;
    private iNo2 : number;

    public constructor(A : number, B : number)
    {
        this.iNo1 = A;
        this.iNo2 = B;
    }

    public Addition() : number
    {
        return (this.iNo1 + this.iNo2);
    }

    public Substraction() : number
    {
        return (this.iNo1 - this.iNo2);
    }

    public Multiplication() : number
    {
        return (this.iNo1 * this.iNo2);
    }

    public Division() : number
    {
        return (this.iNo1 / this.iNo2);
    }
}

var Value1 : number = 10;
var Value2 : number = 20;
var Result : number = 0;

var aobj1 : Arithmetic = new Arithmetic(Value1, Value2);
Result = aobj1.Addition();
console.log("Addition of number is : "+Result);

var aobj2 : Arithmetic = new Arithmetic(Value1, Value2);
Result = aobj2.Multiplication();
console.log("Multiplication of numbers is : "+Result);

