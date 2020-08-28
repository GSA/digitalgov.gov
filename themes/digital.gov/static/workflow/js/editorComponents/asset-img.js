const component = {
  id: "assetImg",
  label: "Asset Image",
  hint:
    'example: {{< asset-img path="/img/digitalgov-logo-black.svg" alt="" width="220" >}}',
  fields: [
    {
      name: "path",
      label: "Path",
      widget: "string"
    },
    {
      name: "alt",
      label: "Alt text",
      widget: "string"
    },
    {
      name: "width",
      label: "Width",
      widget: "string"
    },
    {
      name: "bg",
      label: "Dark",
      widget: "boolean"
    }
  ],
  pattern: /{{< asset-img\s?(?:src="(.*?)")?\s?(?:alt="(.*?)")?\s?(?:width="(.*?)")?\s?(?:bg="(.*?)")? >}}/,
  fromBlock: function(match) {
    return {
      path: match[1],
      alt: match[2],
      width: match[3],
      bg: match[4]
    };
  },
  toBlock: function(obj) {
    return `{{< asset-img path="${obj.path}" alt="${
      obj.alt ? obj.alt : ""
    }" width="${obj.width ? obj.width : ""}" bg="${obj.bg ? "dark" : ""}" >}}`;
  },
  toPreview: function(obj) {
    return `{{< asset-img path="${obj.path}" alt="${
      obj.alt ? obj.alt : ""
    }" width="${obj.width ? obj.width : ""}" bg="${obj.bg ? "dark" : ""}" >}}`;
  }
};

export default component;
