
class Sample {
    value = 5;
    constructor() {
       let Y =  this.x(5);
    }

    x(a) {
        this.value = a;
       this.y();
    }

    y(){
        console.log(this.value);
        this.x()
    }
}