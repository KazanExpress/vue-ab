import component from './component';
import { randomCandidate } from './toolbox'
import { storage, selectAB } from './persistence'

function install(Vue, options = {}) {
  if (options.storage) {
    const cfg = options.storage;
    if (cfg.name) storage.name = cfg.name;
    if (cfg.method) storage.method = cfg.method;
    if (cfg.expiry) storage.expiry = parseInt(expiry);
  }

  Vue.component(options.component || 'split-test', component);

  Vue.mixin({
    beforeCreate() {
      this.$abtest = selectAB
    }
  });

  window.setSplitType = function setSplitType(name, winner) {
    storage.entry = {
      name,
      winner
    };
  }
}

export default install;

export {
  selectAB as abtest,
  randomCandidate,
  install,
  install as plugin,
  SplitTest
};