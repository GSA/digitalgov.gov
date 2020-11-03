const component = {
  id: "box",
  label: "Box",
  fields: [
    {
      name: "color",
      label: "Color",
      widget: "select",
      options: ["", "base", "base-light", "base-dark"]
    },
    {
      name: "content",
      label: "Content",
      widget: "text"
    }
  ],
  pattern: /{{< box\s?(?:color="(.*?)")? >}}(.*?){{< \/box >}}/,
  fromBlock: function(match) {
    return {
      color: match[1],
      content: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< box color="${obj.color ? obj.color : ""}" >}} ${
      obj.content
    } {{< /box >}}`;
  },
  toPreview: function(obj) {
    return `{{< box color="${obj.color ? obj.color : ""}" >}} ${
      obj.content
    } {{< /box >}}`;
  }
};

export default component;
