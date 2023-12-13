import { IParseMailTemplateDTO } from '../../MailTemplateProvider/dtos/IParseMailTemplateDTO';

export interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendEmailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
