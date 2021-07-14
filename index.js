// Your code here

class Polygon {

  constructor(arrayOfIntegers) {
    this.sides = arrayOfIntegers;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce(function(acc, current) {
      return acc += current;
    }, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    const isThreeSides = this.countSides === 3;
    const isSumOfTwoSidesGreaterThanThirdSide = () => {
      if ((this.sides[1] + this.sides[2]) < this.sides[0]) {
        return false;
      }
      return true;
    };
    return isThreeSides && isSumOfTwoSidesGreaterThanThirdSide();
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2;
  }

  get isValid() {
    const isFourSides = this.countSides === 4;
    const isAllSidesEqual = () => {
      const side1 = this.sides[0];
      for (let side of this.sides) {
        if (side1 !== side) {
          return false;
        }
      }
      return true;
    };
    return isFourSides && isAllSidesEqual();
  }
}