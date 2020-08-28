const component = {
  id: "legacyImgRight",
  label: "Legacy images, right aligned",
  hint:
    'example: {{< legacy-img-right src="2016/07/250-x-444-FEMA-app-Heat-Advisory-pg-1-for-Washington-DC-area-July-25th-2016.jpg" alt="Screen capture of the FEMA app\'s Heat Advisory for the Washington, DC area on July 25, 2016." >}}',
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
  pattern: /{{< legacy-img-right\s?(?:src="(.*?)")?\s?(?:alt="(.*?)")? >}}/,
  fromBlock: function(match) {
    return {
      src: match[1],
      alt: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< legacy-img-right src="${obj.src}" alt="${
      obj.alt ? obj.alt : ""
    }" >}}`;
  },
  toPreview: function(obj) {
    return `{{< legacy-img-right src="${obj.src}" alt="${
      obj.alt ? obj.alt : ""
    }" >}}`;
  }
};

export default component;
