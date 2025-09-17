function calArea(r:number):number;
function calArea(l:number, b:number):number;
function calArea(a:number, b?:number):number{
    if(b) return a*b;
    else return Math.PI * a * a;
}
console.log(calArea(3));
console.log(calArea(2, 5));