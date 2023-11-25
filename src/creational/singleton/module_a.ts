import { MyDataBaseModule } from './db/my-database-module';

const myDataBaseClassic = MyDataBaseModule;
myDataBaseClassic.add({ name: 'Pedro', age: 45 });
myDataBaseClassic.add({ name: 'Luiz', age: 25 });
myDataBaseClassic.add({ name: 'Iuri', age: 15 });

export { myDataBaseClassic };
