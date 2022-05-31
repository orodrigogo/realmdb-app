import Realm from "realm";
import { OrderSchema } from './Schemas/OrderSchema';

export const getRealm = async () => await Realm.open({
  path: "decode-app",
  schema: [OrderSchema],
  schemaVersion: 3
});
