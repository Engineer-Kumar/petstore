// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Petstore } = initSchema(schema);

export {
  Petstore
};