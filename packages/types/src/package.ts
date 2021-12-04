export interface Dependencies {
  [name: string]: string;
}

export interface Funding {
  type: string;
  url: string;
}

export type PackageBin = string | { [commandName: string]: string };

export interface PeerDependenciesMeta {
  [dependencyName: string]: {
    optional?: boolean;
  };
}

export interface DependenciesMeta {
  [dependencyName: string]: {
    injected?: boolean;
    node?: string;
  };
}

export interface PublishConfig extends Record<string, unknown> {
  directory?: string;
  executableFiles?: string[];
}

export type PackageScripts = {
  [name: string]: string;
} & {
  prepublish?: string;
  prepare?: string;
  prepublishOnly?: string;
  prepack?: string;
  postpack?: string;
  publish?: string;
  postpublish?: string;
  preinstall?: string;
  install?: string;
  postinstall?: string;
  preuninstall?: string;
  uninstall?: string;
  postuninstall?: string;
  preversion?: string;
  version?: string;
  postversion?: string;
  pretest?: string;
  test?: string;
  posttest?: string;
  prestop?: string;
  stop?: string;
  poststop?: string;
  prestart?: string;
  start?: string;
  poststart?: string;
  prerestart?: string;
  restart?: string;
  postrestart?: string;
  preshrinkwrap?: string;
  shrinkwrap?: string;
  postshrinkwrap?: string;
};

export interface BasePackageJson {
  name?: string;
  version?: string;
  bin?: PackageBin;
  description?: string;
  directories?: {
    bin?: string;
  };
  dependencies?: Dependencies;
  devDependencies?: Dependencies;
  optionalDependencies?: Dependencies;
  peerDependencies?: Dependencies;
  peerDependenciesMeta?: PeerDependenciesMeta;
  dependenciesMeta?: DependenciesMeta;
  bundleDependencies?: string[];
  bundledDependencies?: string[];
  homepage?: string;
  repository?: string | { url: string };
  scripts?: PackageScripts;
  config?: object;
  engines?: {
    node?: string;
    npm?: string;
    pnpm?: string;
  };
  cpu?: string[];
  os?: string[];
  main?: string;
  module?: string;
  typings?: string;
  types?: string;
  publishConfig?: PublishConfig;
  funding?: Funding[];
  keyword?: string[];
  bugs?: {
    url: string;
  };
  exports?: {
    [key: string]: {
      import: string;
      require: string;
    };
  };
}

export type DependencyManifest = BasePackageJson &
  Required<Pick<BasePackageJson, 'name' | 'version'>>;

export type PackageExtension = Pick<
  BasePackageJson,
  'dependencies' | 'optionalDependencies' | 'peerDependencies' | 'peerDependenciesMeta'
>;