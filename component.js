import { storage } from './persistence'
import { randomCandidate } from './toolbox'

export default {
  functional: true,
  props: {
    always: String,
    name: String
  },
  render(h, ctx) {
    const name = ctx.props.name || ctx.parent.$options.name;
    if (!name) throw 'VueA2B Error: The test name is mandatory!';

    if (!storage.entry[name]) {
      storage.entry = {
        name,
        winner: ctx.props.always || randomCandidate(ctx.children)
      };
    }
    
    const variations = ctx.slots();
    const winner = storage.entry[name];

    return variations[winner][0];
  }
};