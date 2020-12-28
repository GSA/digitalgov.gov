const component = {
  id: "footnote",
  label: "Footnote",
  hint: "example: {{< footnote >}} Some footnote text {{< /footnote >}}",
  fields: [
    {
      name: "content",
      label: "Content",
      widget: "text"
    }
  ],
  pattern: /{{< footnote >}}(.*?){{< \/footnote >}}/,
  fromBlock: function(match) {
    return {
      color: match[1],
      content: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< footnote >}} ${obj.content} {{< /footnote >}}`;
  },
  toPreview: function(obj) {
    return `{{< footnote >}} ${obj.content} {{< /footnote >}}`;
  }
};

export default component;
