import GoogleEmailProvider from '../providers/EmailProvider/implementations/GoogleEmailProvider';

export default class EmailController {
  public async sendEmail(
    to: string,
    subject: string,
    templateData: string,
  ): Promise<void> {
    try {
      const emailProvider = new GoogleEmailProvider();

      await emailProvider.sendMail({
        to,
        subject,
        templateData,
      });

      return { success: true, message: 'E-mail enviado com sucesso!' };
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      return { success: false, message: 'Erro ao enviar e-mail.' };
    }
  }
}
