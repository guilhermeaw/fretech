import handlebars from 'handlebars';
import path from 'path';
import fs from 'fs';

import { IParseMailTemplateDTO } from '../dtos/IParseMailTemplateDTO';

class HandlebarsMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const template = path.resolve(
      __dirname,
      '..',
      'views',
      'out_for_delivery.hbs',
    );

    const templateFileContent = await fs.promises.readFile(template, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
