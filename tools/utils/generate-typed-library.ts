import { getWorkspaceLayout, names, Tree } from '@nrwl/devkit';
import { Linter } from '@nrwl/linter';
import { libraryGenerator } from '@nrwl/react';
import { Schema } from '@nrwl/react/src/generators/library/schema';
import { getScopeDirectory } from './get-scope-directory';
import { LibraryTypedSchema } from './library-types';

export async function generateTypedLibrary(
  tree: Tree,
  schema: LibraryTypedSchema
) {
  const { name, scope: schemaScope, type } = schema;

  const scope = getScopeDirectory(tree, schemaScope);
  const directory = `${scope}/${schema.type}`;

  const { npmScope } = getWorkspaceLayout(tree);

  const publishableImportPath =
    `@${npmScope}/` + `${directory}/${name}`.replace(new RegExp('/', 'g'), '-');

  const reactLibrarySchema: Schema = {
    name,
    directory,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
    skipFormat: true,
    skipTsConfig: false,
    style: 'scss',
    tags: `scope:${scope}, type:${type}`,
    ...(scope === 'packages'
      ? { publishable: true, importPath: publishableImportPath }
      : {}),
  };

  await libraryGenerator(tree, reactLibrarySchema);
}
