class Person{
    constructor(name, lastname, age){
        this.name = name
        this.lastname = lastname
        this.age = age
        this.data = `My name is ${name} ${lastname} and I'm ${age} years old.` //En este caso podemos colocar la variable sin el ths. porque nos encontramos dentro del constructor
    }
// Los métodos van dentro de la clase pero fuera del constructor

    saludar(){
        return `Hi, my name ${this.name} and I'm ${this.age} ` //En este caso si debemos colocar el this. para referenciar los atributos del objeto
    }

}

const Julie = new Person ('Julie', 'Sarmiento', '27');
const Ruth = new Person('Ruth', 'Jimenez', 26);
