const keywordExtractor = require("keyword-extractor-korean");

const extractKeywords = (text) => {
  text = typeof text === 'string' ? text : '';
  const extractor = keywordExtractor();
  const keywords = extractor(text);
  // Sort keywords by values
  let sortable = [];
  for (kw in keywords) {
    sortable.push({ key: kw, val: keywords[kw] });
  }
  sortable = sortable.sort((k1, k2) => k2.val - k1.val);
  sortable = sortable.slice(0, 5);
  return sortable.map(kw => kw.key);
};

module.exports = {
  extractKeywords,
};
