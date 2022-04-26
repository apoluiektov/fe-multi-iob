import { readProjectConfiguration, Tree } from '@nrwl/devkit';

export function getScopeDirectory(tree: Tree, scope: string) {
  try {
    if (readProjectConfiguration(tree, scope)) {
      return scope;
    }
  } catch (e) {}
  return 'packages';
}
