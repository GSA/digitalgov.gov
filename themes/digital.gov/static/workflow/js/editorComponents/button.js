const component = {
  id: "button",
  label: "Button",
  hint:
    'example: {{< button href="https://usdigitalregistry.digitalgov.gov/admin" text="Register and Manage Accounts" >}}',
  fields: [
    {
      name: "href",
      label: "URL",
      widget: "string"
    },
    {
      name: "text",
      label: "Text",
      widget: "string"
    }
  ],
  pattern: /{{< button\s?(?:href="(.*?)")?\s?(?:text="(.*?)")? >}}/,
  fromBlock: function(match) {
    return {
      href: match[1],
      text: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< img href="${obj.href}" text="${obj.text}" >}}`;
  },
  toPreview: function(obj) {
    return `{{< img href="${obj.href}" text="${obj.text}" >}}`;
  }
};

export default component;
