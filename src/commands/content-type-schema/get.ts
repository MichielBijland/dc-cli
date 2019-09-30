import { Arguments } from 'yargs';
import { CommandOptions } from '../../interfaces/command-options.interface';
import { GlobalConfigurationParameters } from '../../configuration/command-line-parser.service';
import { renderData, RenderingArguments, RenderingOptions } from '../../view/data-presenter';
import dynamicContentClientFactory from '../../services/dynamic-content-client-factory';
import { ContentTypeSchema } from 'dc-management-sdk-js';

export const command = 'get';

export const desc = 'Get Content Type Schema';

export const builder: CommandOptions = {
  id: {
    type: 'string',
    demandOption: true,
    description: 'content-type-schema ID'
  },
  ...RenderingOptions
};

interface BuilderOptions {
  id: string;
}

export const handler = async (
  argv: Arguments<BuilderOptions & GlobalConfigurationParameters & RenderingArguments>
): Promise<void> => {
  const client = dynamicContentClientFactory(argv);

  const contentTypeSchema: ContentTypeSchema = await client.contentTypeSchemas.get(argv.id);

  return renderData(argv, contentTypeSchema, undefined, {
    columns: {
      1: {
        width: 100
      }
    }
  });
};
