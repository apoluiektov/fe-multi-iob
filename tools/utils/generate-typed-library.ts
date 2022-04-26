import { Tree } from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { libraryGenerator } from '@nrwl/react';
import { Schema } from '@nrwl/react/src/generators/library/schema';
import { getScopeDirectory } from './get-scope-directory';
import { LibraryTypedSchema } from './library-types';

export async function generateTypedLibrary(
  tree: Tree,
  schema: LibraryTypedSchema
) {
  const scope = getScopeDirectory(tree, schema.scope);
  const directory = `${scope}/${schema.type}`;

  const reactLibrarySchema: Schema = {
    name: schema.name,
    directory,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
    skipFormat: true,
    skipTsConfig: false,
    style: 'scss',
    publishable: scope === 'packages',
    tags: `scope:${scope}, type:${schema.type}`,
  };

  await libraryGenerator(tree, reactLibrarySchema);
}
