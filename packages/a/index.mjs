export class A {
    toString() {
        return `Hello from "${this.constructor.name}".`;
    }
}

console.log('package "a" loaded.');
console.log(new A() + '');