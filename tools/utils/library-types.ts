export interface LibrarySchema {
  name: string;
  scope: string;
}

export enum LibraryType {
  FEATURES = 'features',
  DATA_ACCESS = 'data-access',
  UI = 'ui',
  utils = 'utils',
}

export interface LibraryTypedSchema extends LibrarySchema {
  type: LibraryType;
}
