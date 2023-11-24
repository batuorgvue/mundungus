import {camelCase, upperFirst} from 'lodash';

export const transformTypeName = (isCamelCase: boolean, typename: string) => {
  return isCamelCase ? upperFirst(camelCase(typename)) : typename;
};

export const transformColumnName = (
  isCamelCase: boolean,
  columnName: string,
) => {
  return isCamelCase ? camelCase(columnName) : columnName;
};
