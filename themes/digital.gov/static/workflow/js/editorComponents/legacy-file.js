const component = {
  id: "legacyFile",
  label: "Legacy file",
  hint: 'example: {{< legacy-file "2014/07/metadata-in-drupal-epa.pdf" >}}',
  fields: [
    {
      name: "path",
      label: "File path",
      widget: "string"
    }
  ],
  pattern: /{{< legacy-file\s?(?:"(.*?)")? >}}/,
  fromBlock: function(match) {
    return {
      src: match[1]
    };
  },
  toBlock: function(obj) {
    return `{{< legacy-file "${obj.src}" >}}`;
  },
  toPreview: function(obj) {
    return `{{< legacy-file "${obj.src}" >}}`;
  }
};

export default component;
