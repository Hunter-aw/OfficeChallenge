//write your code here to make the tests pass
class Document {
    constructor(name) {
        this.EmployeeName = name
    }
}

class Employee {
    constructor (name) {
        this.name = name
    }
    work(array) {
        let newDoc = new Document(this.name)
        let len = array.length
        array.push(newDoc)
        array.push(newDoc)
        array.push(newDoc)
        array.push(newDoc)
        array.push(newDoc)
        array.push(newDoc)
        array.push(newDoc)
        array.push(newDoc)
        array.push(newDoc)
        array.push(newDoc)

    }
}

class Manager {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    hireEmployee(name) {
        let newEmployee = new Employee(name);
        this.employees.push(newEmployee)
    }
    askEmployeesToWork(office) {
        for (let employee of this.employees) {
        employee.work(office)
    }
    }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }
    clean() {
        console.log("Clean")
    }
}

class Office {
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }
    hireCleaner(name) {
        let newCleaner = new Cleaner(name);
        this.cleaners.push(newCleaner)
    }
    hireManager(name) {
        let newManager = new Manager(name);
        this.managers.push(newManager)
    }
    startWorkDay() {
        let managers = this.managers;
        let cleaners = this.cleaners;
        for (let manager of managers) {
            manager.askEmployeesToWork(this.documents)
        }
        for (let cleaner of cleaners) {
            cleaner.clean()
        }
    }
}

let Hunter = new Employee ("Hunter")
let Twiggle = new Office ("Twiggle")
Twiggle.hireManager('Dan')
Twiggle.managers[0].hireEmployee("Deb")
Twiggle.managers[0].askEmployeesToWork(Twiggle.documents)