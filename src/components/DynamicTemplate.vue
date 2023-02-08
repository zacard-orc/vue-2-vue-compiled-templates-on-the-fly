<script>
export default {
  name: "DynamicTemplate",
  props: {
    template: String,
    components: Object,
  },
  render(h) {
    let nonFunctionAttrs = {};
    let functionAttrs = {};

    for (const prop in this.$attrs) {
      if (typeof this.$attrs[prop] === "function") {
        functionAttrs[prop] = this.$attrs[prop];
      } else {
        nonFunctionAttrs[prop] = this.$attrs[prop];
      }
    }

    const dynamic = {
      name: "dynamic-inner-template",
      template: this.template,
      components: this.components,
      data: () => nonFunctionAttrs,
      methods: functionAttrs,
    };

    return h(dynamic);
  },
};
</script>
