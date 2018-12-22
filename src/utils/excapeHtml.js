export const escapeHtml = html => {
  return html
    .replace(/&/g, `&amp;`)
    .replace(/</g, `&lt;`)
    .replace(/>/g, `&gt;`)
    .replace(/"/g, `&quot;`)
    .replace(/'/g, `&#039;`);
};

export const unescapeHtml = html => {
  return html
    .replace(/&amp;/g, `&`)
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&#039;/g, `'`);
};
