const component = {
  id: "instagram",
  label: "Instagram",
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
  pattern: /{{< instagram ([a-zA-Z0-9]+)\s?(hidecaption)? >}}/,
  fromBlock: function(match) {
    return {
      pid: match[1],
      hidecaption: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< instagram ${obj.pid}${
      obj.hidecaption ? " hidecaption" : ""
    } >}}`;
  },
  toPreview: function(obj) {
    return `{{< instagram ${obj.pid}${
      obj.hidecaption ? " hidecaption" : ""
    } >}}`;
  }
};

export default component;
