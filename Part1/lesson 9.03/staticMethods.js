class Square{
    constructor(width) {
        this.width = width;
        this.d = width;
    }
    static equals(a,b) {
        return a.width * a.d === b.width * b.d;
    }
}


let square1 = new Square(8);
let square2 = new Square(8);

console.log(Square.equals(square1,square2))