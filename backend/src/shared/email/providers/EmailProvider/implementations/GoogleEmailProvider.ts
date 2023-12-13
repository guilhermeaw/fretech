import nodemailer, { Transporter } from 'nodemailer';
import HandlebarsMailTemplateProvider from '../../MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

import ISendEmailDTO from '../dtos/ISendEmailDTO';

export default class GoogleEmailProvider {
  private client: Transporter;

  private mailTemplateProvider: HandlebarsMailTemplateProvider;

  constructor() {
    this.client = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      secureConection: false,
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      }
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
        address: process.env.GMAIL_EMAIL,
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
