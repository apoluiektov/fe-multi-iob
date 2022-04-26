import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';

import { LibrarySchema, LibraryType } from '../../utils';
import { generateTypedLibrary } from '../../utils/generate-typed-library';

export interface DataAccessSchema extends LibrarySchema {}

export default async function (tree: Tree, schema: DataAccessSchema) {
  await generateTypedLibrary(tree, {
    ...schema,
    type: LibraryType.DATA_ACCESS,
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
