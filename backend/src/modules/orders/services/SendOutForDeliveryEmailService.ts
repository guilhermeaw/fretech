import path from 'path';
import { IMailContact } from '@shared/email/providers/EmailProvider/dtos/ISendEmailDTO';
import GoogleEmailProvider from '@shared/email/providers/EmailProvider/implementations/GoogleEmailProvider';
import AppError from '@shared/errors/AppError';

export default class SendOutForDeliveryEmailService {
  public async sendEmail(to: IMailContact): Promise<void> {
    try {
      const emailProvider = new GoogleEmailProvider();

      const outForDeliveryTemplate = path.resolve(
        __dirname,
        '..',
        'views',
        'out_for_delivery.hbs',
      );

      await emailProvider.sendMail({
        to,
        subject: 'Seu pedido está a caminho!',
        templateData: {
          file: outForDeliveryTemplate,
        },
      });
    } catch (error) {
      throw new AppError(`Erro ao enviar e-mail: ${error}`);
    }
  }
}
