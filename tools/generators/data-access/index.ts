import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';

import { LibrarySchema, LibraryType } from '../../utils';
import { generateTypedLibrary } from '../../utils/generate-typed-library';

export interface UiSchema extends LibrarySchema {}

export default async function (tree: Tree, schema: UiSchema) {
  await generateTypedLibrary(tree, {
    ...schema,
    type: LibraryType.UI,
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
