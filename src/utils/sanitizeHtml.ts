import DOMPurify from "dompurify";

export const sanitizeHtml = (html: string) => {
  return DOMPurify.sanitize(html, {
    FORBID_ATTR: ["style"],
  });
};
