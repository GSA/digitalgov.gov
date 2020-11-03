const component = {
  id: "legacyImg",
  label: "Legacy images",
  hint:
    'example: {{< legacy-img src="/2015/09/600-x-147-howto-icons-left-text.jpg" alt="Icons from FCPCCS toolkit" >}}',
  fields: [
    {
      name: "src",
      label: "Source",
      widget: "string"
    },
    {
      name: "alt",
      label: "Alt text",
      widget: "string"
    }
  ],
  pattern: /{{< legacy-img\s?(?:src="(.*?)")?\s?(?:alt="(.*?)")? >}}/,
  fromBlock: function(match) {
    return {
      src: match[1],
      alt: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< legacy-img src="${obj.src}" alt="${
      obj.alt ? obj.alt : ""
    }" >}}`;
  },
  toPreview: function(obj) {
    return `{{< legacy-img src="${obj.src}" alt="${
      obj.alt ? obj.alt : ""
    }" >}}`;
  }
};

export default component;
