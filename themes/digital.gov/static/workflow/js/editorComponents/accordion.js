const component = {
  id: "accordion",
  label: "Accordion",
  hint:
    'example: {{< accordion kicker="Last update" title="April 1, 2020" icon="content_copy" >}} inner text of what you want to collapse {{< /accordion >}}',
  fields: [
    {
      name: "kicker",
      label: "Kicker",
      widget: "string"
    },
    {
      name: "title",
      label: "Title",
      widget: "string"
    },
    {
      name: "icon",
      label: "Icon",
      widget: "string"
    },
    {
      name: "content",
      label: "Content",
      widget: "text"
    }
  ],
  pattern: /{{< accordion\s?(?:kicker="(.*?)")?\s?(?:title="(.*?)")?\s?(?:icon="(.*?)")? >}}(.*?){{< \/accordion >}}/,
  fromBlock: function(match) {
    return {
      kicker: match[1],
      title: match[2],
      icon: match[3],
      content: match[4]
    };
  },
  toBlock: function(obj) {
    return `{{< accordion kicker="${obj.kicker ? obj.kicker : ""}" title="${
      obj.title ? obj.title : ""
    }" icon="${obj.icon ? obj.icon : ""}" >}} ${
      obj.content ? obj.content : ""
    } {{< /accordion >}}`;
  },
  toPreview: function(obj) {
    return `{{< accordion kicker="${obj.kicker ? obj.kicker : ""}" title="${
      obj.title ? obj.title : ""
    }" icon="${obj.icon ? obj.icon : ""}" >}} ${
      obj.content ? obj.content : ""
    } {{< /accordion >}}`;
  }
};

export default component;
