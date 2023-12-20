
class Circle
{
    public Radius : number;
    public PI : number;

    public constructor(A : number)
    {
        this.Radius = A;
        this.PI = 3.14;
    }

    public Area()
    {
        return (this.PI*this.Radius*this.Radius);
    }
}

class CircleX extends Circle
{
    public Circumference()
    {
        return(2*this.PI*this.Radius);
    }
}

var Value1 : number = 10;
var Value2 : number = 11;
var Result : number = 0;

var cobj1 : CircleX = new CircleX(Value1);
Result = cobj1.Area();
console.log("Area of circle is : "+Result);
Result = cobj1.Circumference();
console.log("Circumference of circle is : "+Result);

var cobj2 : CircleX = new CircleX(Value2);
Result = cobj2.Area();
console.log("Area of circle is : "+Result);
Result = cobj2.Circumference();
console.log("Circumference of circle is : "+Result);