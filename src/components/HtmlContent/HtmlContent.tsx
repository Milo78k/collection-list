import { sanitizeHtml } from "@/utils/sanitizeHtml";

type HtmlContentProps = {
  content: string;
  className?: string;
};

export const HtmlContent = ({ content, className }: HtmlContentProps) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(content),
      }}
    />
  );
};
