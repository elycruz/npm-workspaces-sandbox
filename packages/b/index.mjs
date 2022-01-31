import {A} from 'a';
import {isset} from 'fjl';

export class B extends A {
    toString() {
        return `Hello from "${this.constructor.name}";  Parent constructor "${A.name}".`;
    }
}

console.log('package "b" loaded.');
console.log(new B() + '');
console.log(`Imported from third party package, installed on repo root: ${isset.toString()}`);