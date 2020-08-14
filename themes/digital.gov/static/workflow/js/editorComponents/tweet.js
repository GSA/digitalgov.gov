const component = {
  id: "tweet",
  label: "Tweet",
  hint: "example: {{< tweet 877500564405444608 >}}",
  fields: [
    {
      name: "id",
      label: "Tweet id",
      widget: "string"
    }
  ],
  pattern: /{{< tweet (.*?) >}}/,
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  toBlock: function(obj) {
    return `{{< tweet ${obj.id} >}}`;
  },
  toPreview: function(obj) {
    return `{{< tweet ${obj.id} >}}`;
  }
};

export default component;
