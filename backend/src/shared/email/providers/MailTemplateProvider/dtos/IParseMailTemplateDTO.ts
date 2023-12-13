interface ITemplateVariables {
  [key: string]: string | number;
}

enum MailTemplateFiles {
  COMPLETE_REGISTER = 'out_for_delivery.hbs',
}

export interface IParseMailTemplateDTO {
  file: MailTemplateFiles;
  variables: ITemplateVariables;
}
