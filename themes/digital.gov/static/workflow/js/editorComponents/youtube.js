const component = {
  id: "youtube",
  label: "YouTube embed",
  hint: "example: {{< youtube iLD4Bu6I2I8 >}}",
  fields: [
    {
      name: "id",
      label: "Embed string",
      widget: "string"
    }
  ],
  pattern: /{{< youtube (.*?) >}}/,
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  toBlock: function(obj) {
    return `{{< youtube ${obj.id} >}}`;
  },
  toPreview: function(obj) {
    return `{{< youtube ${obj.id} >}}`;
  }
};

export default component;
