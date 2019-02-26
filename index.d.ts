interface PluginOptions {
  component?: string;
  storage?: {
    name?: string;
    method?: 'cookie' | 'localStorage';
    expiry?: string | number;
  };
}

declare function install(Vue: any, options: PluginOptions): void;

declare function randomCandidate<T>(variations: Array<T>): T;
declare function selectAB<T>(name: string, variants: Array<T>): T;

export default install;

export {
  selectAB as abtest,
  randomCandidate,
  install,
  install as plugin
}