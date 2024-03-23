class employee {
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }
    detail() {
        document.write(this.id + " " + this.name + "<br>");
    }
}

var emp1 = new employee('101', 'Toye NIIT');
var emp2 = new employee('102', 'Roland Ayo');

emp1.detail();
emp2.detail();

class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    // getter
    get area() {
        return this.calculateArea();
    }

    // Method
    calculateArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle (100, 100);
    document.write("<br> the area is" + square.area);

    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            document.write(`${this.name} makes a noise; `);
        }
    }

    class Dog extends Animal {
        constructor (name) {
            super(name)
        }

        speak () {
            document.write(`${this.name} barks;`);
        }
    }

    const d = new Dog ('Hitzie')