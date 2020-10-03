const component = {
  id: "cardQuote",
  label: "Card quote",
  hint:
    'example: {{< card-quote text="Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilization work." cite="Vince Lombardi, National Football League (NFL) coach" >}}',
  fields: [
    {
      name: "text",
      label: "Text",
      widget: "string"
    },
    {
      name: "cite",
      label: "Cite",
      widget: "string"
    }
  ],
  pattern: /{{< card-quote\s?(?:text="(.*?)")?\s?(?:cite="(.*?)")? >}}/,
  fromBlock: function(match) {
    return {
      text: match[1],
      cite: match[2]
    };
  },
  toBlock: function(obj) {
    return `{{< card-quote text="${obj.text}" cite="${obj.cite}" >}}`;
  },
  toPreview: function(obj) {
    return `{{< card-quote text="${obj.text}" cite="${obj.cite}" >}}`;
  }
};

export default component;
