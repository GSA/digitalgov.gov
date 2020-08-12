const component = {
  id: "instagram",
  label: "Instagram",
  hint:
    "example: {{< instagram BWNjjyYFxVx >}}, example with hidden caption: {{< instagram BWNjjyYFxVx hidecaption >}}",
  fields: [
    {
      name: "pid",
      label: "Photo id",
      widget: "string"
    },
    {
      name: "hidecaption",
      label: "Hidden caption",
      widget: "boolean"
    }
  ],
  pattern: /{{< instagram (.*?)\s?(hidecaption)? >}}/,
  fromBlock: function(match) {
    return {
      pid: match[1],
      hidecaption: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< instagram ${obj.pid} ${
      obj.hidecaption ? "hidecaption" : ""
    }>}}`;
  },
  toPreview: function(obj) {
    return `{{< instagram ${obj.pid} ${
      obj.hidecaption ? "hidecaption" : ""
    }>}}`;
  }
};

export default component;
