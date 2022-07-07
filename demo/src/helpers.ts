import { ChartFunctions } from '../../src';

export const prettyPrint = (json: unknown): string => JSON.stringify(json, null, 2);
export const printFunctions = (f: ChartFunctions): string => {
  let stringifiedObj = '';
  Object.entries(f).map(([key, value]) => {
    Object.entries(value).map(([key2, value2]) => {
      stringifiedObj += key + '.' + key2 + ': ' + value2.toString() + '\n';
    });
  });

  return stringifiedObj;
};

const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

export const mergeDeep = <T>(target: T, ...sources: T[]): T => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }

  return mergeDeep(target, ...sources);
};
