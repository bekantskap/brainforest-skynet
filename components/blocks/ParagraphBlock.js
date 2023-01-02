import parseHtml from "../../lib/parser";

function getClassName(align) {
  if (align === "center" || align === "right") {
    return `text-${align}`;
  }
}

export default function ParagraphBlock({
  align,
  anchor,
  backgroundColor,
  className,
  content,
  dropCap,
  style,
  textColor,
}) {
  return <p className={getClassName(align)}>{parseHtml(content)}</p>;
}
