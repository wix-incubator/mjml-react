export function fixConditionalComment(html, havingContent, newCondition) {
  const comments = /<!(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>/g;
  const conditionals = /<!--\[if.+?\]/;
  return html.replace(comments, match => {
    if (match.includes(havingContent)) {
      return match.replace(conditionals, `<!--[${newCondition}]`);
    }
    return match;
  });
}
