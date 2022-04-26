import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';

import { LibrarySchema, LibraryType } from '../../utils';
import { generateTypedLibrary } from '../../utils/generate-typed-library';

export interface FeatureSchema extends LibrarySchema {}

export default async function (tree: Tree, schema: FeatureSchema) {
  await generateTypedLibrary(tree, { ...schema, type: LibraryType.FEATURES });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
