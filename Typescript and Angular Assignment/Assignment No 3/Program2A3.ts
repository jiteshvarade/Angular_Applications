
class Circle
{
    private Radius : number;
    private PI : number;

    constructor(A : number)
    {
        this.Radius = A;
        this.PI = 3.14;
    }

    Area()
    {
        return (this.PI*this.Radius*this.Radius);
    }
}

var Value1 : number = 10;
var Value2 : number = 11;
var Result : number = 0;

var cobj1 : Circle = new Circle(Value1);
Result = cobj1.Area();
console.log("Area of circle is : "+Result);

var cobj2 : Circle = new Circle(Value2);
Result = cobj2.Area();
console.log("Area of circle is : "+Result);