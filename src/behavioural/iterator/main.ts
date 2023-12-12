import { MyDataStructure } from './my-data-structure';

const dataStructure = new MyDataStructure();
dataStructure.addItem('a', 'b', 'c', 'd', 'e', 'f');

const [a, b] = dataStructure;

console.log('roubados', a, b);

for (const data of dataStructure) {
  console.log(data);
}
