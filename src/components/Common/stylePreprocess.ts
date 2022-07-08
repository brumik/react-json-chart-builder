import { ChartFunctions, ChartSchemaElement } from '../types'

const replaceStyleFunction = (
  style: Record<string, Record<string, any>>,
  functions: ChartFunctions['style']
): Record<string, Record<string, any>> => {
  const functionNames = Object.keys(functions);
  Object.keys(style).forEach((topKey) => {
    Object.entries(style[topKey]).forEach(([stylingKey, value]) => {
      if (typeof value === 'string') {
        if (functionNames.includes(value)) {
          style[topKey][stylingKey] = functions[value];
        }
      }
    });
  })

  return style;
}

const recursiveReplace = <T>(
  item: T,
  functions: ChartFunctions['style']
): T => {
  Object.keys(item).forEach(key => {
    if (key === 'style') {
      item[key] = replaceStyleFunction(item[key], functions);
    } else if (item[key] && typeof item[key] === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      item[key] = recursiveReplace(item[key], functions);
    }
  });
  return item;
}

export const replaceStringsWithFunctions = (
  schema: ChartSchemaElement[],
  functions: ChartFunctions['style']
): ChartSchemaElement[] => {
  if (Object.keys(functions).length < 1)
    return schema;

  const newSchema = schema.map(item => {
    return recursiveReplace(item, functions);
  });

  return newSchema;
}
