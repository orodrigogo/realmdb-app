export const OrderSchema = {
  name: "Order",
  properties: {
    _id: "string",
    patrimony: "string",
    equipment: "string",
    description: "string",
    status: "string",
    created_at: "date",
  },

  primaryKey: "_id",
};
