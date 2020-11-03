const component = {
  id: "ref",
  label: "Internal link",
  fields: [
    {
      name: "path",
      label: "Relative path",
      widget: "string"
    }
  ],
  pattern: /{{< ref \s?(?:"(.*?)")? >}}/,
  fromBlock: function(match) {
    return {
      path: match[1]
    };
  },
  toBlock: function(obj) {
    return `{{< ref "${obj.path}" >}}`;
  },
  toPreview: function(obj) {
    return `{{< ref "${obj.path}" >}}`;
  }
};

export default component;
