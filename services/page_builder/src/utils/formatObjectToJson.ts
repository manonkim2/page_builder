export const formatObjectToJson = (object: Object) =>
  JSON.stringify(object, null, `\t`);
