import nodemailer, { Transporter } from 'nodemailer';

import ISendEmailDTO from '../dtos/ISendEmailDTO';

export default class EtherealEmailProvider {
  private client: Transporter;

  constructor() {
    this.client = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'wava.corkery97@ethereal.email',
        pass: '8FE5Rv58tJgZk3Negk',
      },
    });
  }

  public async sendMail({ to, from, subject }: ISendEmailDTO): Promise<void> {
    const info = await this.client.sendMail({
      from: {
        name: from?.name || 'Fretech Team',
        address: from?.email || 'fretechteam@fretechteam.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: '<h1>Opa</h1>',
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
}
