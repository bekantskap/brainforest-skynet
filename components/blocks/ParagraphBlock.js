import { gql } from "@apollo/client";
import parseHtml from "../../utils/parser";

export const PARAGRAPH_BLOCK_ATTRIBUTES = gql`
  fragment ParagraphBlockAttributes on CoreParagraphBlockAttributes {
    align
    anchor
    backgroundColor
    className
    content
    dropCap
    style
    textColor
  }
`;

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
