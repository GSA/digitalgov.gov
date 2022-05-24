const component = {
  id: "tweet",
  label: "Tweet",
  hint: "example: {{< tweet user='username' id='10100101010101' >}}",
  fields: [
    {
      name: "id",
      label: "Tweet id",
      widget: "string"
    },
    {
      name: "user",
      label: "User name",
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
    return `{{< tweet user='${obj.user}' id='${obj.id}' >}}`;
  },
  toPreview: function(obj) {
    return `{{< tweet user='${obj.user}' id='${obj.id}' >}}`;
  }
};

export default component;
