import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. Brasil', number: 50 },
          { street: 'Av. Marechall Fontenelle', number: 255 },
        ]);
      }, 2000);
    });
  }
}
