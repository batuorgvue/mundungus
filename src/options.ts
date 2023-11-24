const DEFAULT_OPTIONS: Options = {
  writeHeader: true,
  camelCase: false,
  datesAsStrings: false,
  prefixWithSchemaNames: false,
  inputSuffix: 'Input',
};

export interface Options {
  camelCase: boolean;
  /** Leave date, timestamp, and timestamptz columns as strings, rather than Dates. */
  datesAsStrings: boolean;
  writeHeader: boolean; // write schemats description header
  /** Import types for jsdoc-tagged JSON columns from this path */
  jsonTypesFile?: string;
  /** Prefix the tablenames with the schema name. */
  prefixWithSchemaNames: boolean;

  inputSuffix: string;
}

export const loadDefaultOptions = (
  options: Partial<Options> = {},
): Options => ({
  ...DEFAULT_OPTIONS,
  ...options,
});
