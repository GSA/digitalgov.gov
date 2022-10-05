const component = {
  id: "note",
  label: "Note",
  hint:
    'example: {{< note kicker="Last update" title="April 1, 2020" icon="content_copy" >}} inner text of what you want to collapse {{< /accordion >}}',
  fields: [
    {
      name: "type",
      label: "Type",
      widget: "select",
      options: ["", "activity", "alert"]
    },
    {
      name: "content",
      label: "Content",
      widget: "text"
    }
  ],
  pattern: /{{< note\s?(?:"(.*?)")? >}}(.*?){{< \/note >}}/,
  fromBlock: function(match) {
    return {
      type: match[1],
      content: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< note ${obj.type ? `"${obj.type}"` : ""}>}} ${
      obj.content
    } {{< /note >}}`;
  },
  toPreview: function(obj) {
    return `{{< note ${obj.type ? `"${obj.type}"` : ""}>}} ${
      obj.content
    } {{< /note >}}`;
  }
};

export default component;
