import nodemailer, { Transporter } from 'nodemailer';
import HandlebarsMailTemplateProvider from '../../MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

import ISendEmailDTO from '../dtos/ISendEmailDTO';

export default class GoogleEmailProvider {
  private client: Transporter;

  private mailTemplateProvider: HandlebarsMailTemplateProvider;

  constructor() {
    this.client = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
    });

    this.mailTemplateProvider = new HandlebarsMailTemplateProvider();
  }

  public async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendEmailDTO): Promise<void> {
    this.client.sendMail({
      from: {
        name: from?.name || 'Fretech Team',
        address: process.env.GMAIL_EMAIL || 'fretechteam@gmail.com',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });
  }
}
