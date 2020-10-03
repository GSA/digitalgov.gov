const component = {
  id: "fbVideo",
  label: "Facebook video",
  hint:
    'example: {{< fb-video "https://www.facebook.com/nih.nccih/videos/1405263649496849/" >}}',
  fields: [
    {
      name: "url",
      label: "Full video link",
      widget: "string"
    }
  ],
  pattern: /{{< fb-video\s?(?:"(.*?)")? >}}/,
  fromBlock: function(match) {
    return {
      url: match[1]
    };
  },
  toBlock: function(obj) {
    return `{{< fb-video "${obj.url}" >}}`;
  },
  toPreview: function(obj) {
    return `{{< fb-video "${obj.url}" >}}`;
  }
};

export default component;
