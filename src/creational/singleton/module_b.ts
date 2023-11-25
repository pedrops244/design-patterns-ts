import { MyDataBaseModule } from './db/my-database-module';
import { myDataBaseClassic as myDataBaseClassicFromModuleA } from './module_a';

const myDataBaseClassic = MyDataBaseModule;
myDataBaseClassic.add({ name: 'Clara', age: 22 });
myDataBaseClassic.add({ name: 'Mariana', age: 252 });
myDataBaseClassic.add({ name: 'Olavo', age: 122 });
myDataBaseClassic.show();

console.log(myDataBaseClassic === myDataBaseClassicFromModuleA);
