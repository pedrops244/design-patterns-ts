import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receive
const bedroomLight = new SmartHouseLight('Luz quarto');
const bathroomLight = new SmartHouseLight('Luz banheiro');

// Command
const bedroomlightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomlightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);

// Controle- Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomlightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomlightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.executeCommand('btn-2');

smartHouseApp.undoCommand('btn-1');
smartHouseApp.undoCommand('btn-2');

for (let i = 0; i < 4; i++) {
  smartHouseApp.executeCommand('btn-3');
}
for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-3');
}
