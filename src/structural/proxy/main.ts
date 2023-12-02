import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Pedro', 'pedrops');
  console.log('Isso vai levar 2 segundos.');
  console.log(await user.getAddresses());

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
