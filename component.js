export default {
  functional: true,
  props: {
    always: String,
    name: String
  },
  render(h, ctx) {
    const name = ctx.props.name || ctx.parent.$options.name
    if (!name) throw 'VueA2B Error: The test name is mandatory!'

    const variations = ctx.slots()
    const winner = ctx.props.always ||
      storage.entry[name] ||
      randomCandidate(ctx.children)

    storage.entry = {
      name,
      winner
    }

    return variations[winner][0];
  }
};