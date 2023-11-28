import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory copy';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Pedro', 'BMW');
const car2 = individualFactory.createVehicle('Victor', 'Kwid');

car1.pickUp();
car2.pickUp();
