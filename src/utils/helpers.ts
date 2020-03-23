export const handleEmptyValue = (
  obj: Record<string, any>, key: any, defaultValue = 'no value',
) => (obj[key] ? obj[key] : defaultValue);
