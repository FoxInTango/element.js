/** 语言特性测试
 */
class Base {
    constructor() {
        this.name = 'base';
    }

    echo() {
        console.log('BASE Class Name is : ' + this.name);
    }
};

class Child extends Base {
    constructor() {
        super();
        this.name = 'child';
    }

    echo() {
        //console.log('Class Name is : ' + this.name);
        //console.log('    with super name : ' + super.name);

        super.echo();
    }
};

class Other {
    constructor() {
        this.name = 'other';
    }

    echo() {
        var b = new Base();
        var c = new Child();
        //b.echo();
        c.echo();
    }
}
//b.echo();
//c.echo();
//new Other().echo()

/**
 * 函数参数数目 - arguments 
 */

function argument_number(a, b, c) {
    return arguments.length;
}

/**
 * return null
 */

class NULL {
    constructor() {
        return null;
    }
}

function argument_number(a, b, c) {
    return arguments.length;
}

console.log("argument_number: " + argument_number(1, 2, 3, 4));

class NULL {
    constructor() {
        return null;
    }
}

var n = new NULL();

if (n == null) { console.log("return null OK"); } else { console.log("return null bad -- " + JSON.stringify(n)); } 

let circle = document.getElementById('circle');
console.log(circle.getBoundingClientRect());