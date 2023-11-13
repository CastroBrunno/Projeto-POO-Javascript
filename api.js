//Classe pai (Principal)
class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    makeSound(){
        return "faz algum som";
    }
}

//Classes Filhas
class Cat extends Animal{
    constructor(name){
        super(name, "Gato")
    }

    makeSound(){
        return "Miauu"
    }
}

class Dog extends Animal{
    constructor(name){
        super(name, "Cachorro")
    }

    makeSound(){
        return "Au Au"
    }
}

class Snake extends Animal{
    constructor(name){
        super(name, "Cobra")
    }

    makeSound(){
        return "Shhhii"
    }
}

function displayAnimal(animal){
    const output = document.getElementById('output')
    const div = document.createElement('div')
    div.className = 'animal'
    div.classList.add(animal.type.toLowerCase())
    div.textContent = `${animal.type}: ${animal.name}, som: ${animal.makeSound()}`
    output.appendChild(div)


}

document.getElementById("addCatButton").addEventListener("click", () => {
    const cat = new Cat("Mia");
    displayAnimal(cat)
})

document.getElementById("addDogButton").addEventListener("click", () => {
    const dog = new Dog("Rex");
    displayAnimal(dog)
})

document.getElementById("addSnakeButton").addEventListener("click", () => {
    const snake = new Snake("Celeste");
    displayAnimal(snake)
})
