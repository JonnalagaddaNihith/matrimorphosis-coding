function calArea(a, b) {
    if (b)
        return a * b;
    else
        return Math.PI * a * a;
}
console.log(calArea(3));
console.log(calArea(2, 5));
