import Realm from 'realm';
import { OrderSchema } from './schemas/OrderSchema';

export const getRealm = async () => await Realm.open({
  path: "decode-app",
  schema: [OrderSchema]
});