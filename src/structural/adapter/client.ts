import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-function';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('O e-mail é valido!(CLASSE)');
  } else {
    console.log('O e-mail é inválido!');
  }
}
function validaEmail(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('O e-mail é valido!(FN)');
  } else {
    console.log('O e-mail é inválido!');
  }
}
const email = 'pedro@email.com';
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmail(emailValidatorFnAdapter, email);
