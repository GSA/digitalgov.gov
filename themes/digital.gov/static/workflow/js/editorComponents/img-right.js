const component = {
  id: "imgRight",
  label: "Images, right aligned",
  hint:
    'example: {{< img-right src="peace-corps-customer-satisfaction" alt="A bar graph showing User Satisfaction: Task Completion vs. Content Comprehension" >}}',
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
  pattern: /{{< img-right\s?(?:src="(.*?)")?\s?(?:alt="(.*?)")? >}}/,
  fromBlock: function(match) {
    return {
      src: match[1],
      alt: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< img-right src="${obj.src}" alt="${obj.alt ? obj.alt : ""}" >}}`;
  },
  toPreview: function(obj) {
    return `{{< img-right src="${obj.src}" alt="${obj.alt ? obj.alt : ""}" >}}`;
  }
};

export default component;
