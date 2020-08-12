const component = {
  id: "img-right",
  label: "Images, Right Aligned",
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
  pattern: /{{< img-right src="([a-zA-Z0-9]+)" alt="([a-zA-Z0-9]+)" >}}/,
  fromBlock: function(match) {
    return {
      src: match[1],
      alt: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< img-right src="${obj.src}" alt="${obj.alt}" >}}`;
  },
  toPreview: function(obj) {
    return `{{< img-right src="${obj.src}" alt="${obj.alt}" >}}`;
  }
};

export default component;
