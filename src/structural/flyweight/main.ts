import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Pedro', '229222', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Helena', '229222', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Clara', '552', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Robeto', '2', 'Rua A', 'Rj');

console.log(factory.getLocations());
