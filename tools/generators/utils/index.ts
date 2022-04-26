import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';

import { LibrarySchema, LibraryType } from '../../utils';
import { generateTypedLibrary } from '../../utils/generate-typed-library';

export interface UtilsSchema extends LibrarySchema {}

export default async function (tree: Tree, schema: UtilsSchema) {
  await generateTypedLibrary(tree, {
    ...schema,
    type: LibraryType.UTILS,
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
