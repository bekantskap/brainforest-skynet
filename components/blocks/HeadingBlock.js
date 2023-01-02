import { gql } from "@apollo/client";
import React from "react";

export const HEADING_BLOCK_ATTRIBUTES = gql`
  fragment HeadingBlockAttributes on CoreHeadingBlockAttributes {
    align
    anchor
    backgroundColor
    className
    content
    level
    style
    textAlign
    textColor
  }
`;

function getClassName(align) {
  if (align === "center" || align === "right") {
    return `text-${align}`;
  }
}

export default function HeadingBlock({
  align,
  anchor,
  backgroundColor,
  className,
  content,
  textAlign,
  textColor,
  style,
  level,
}) {
  const tag = `h${level}`;
  console.log(align);
  return React.createElement(
    tag,
    {
      className: getClassName(textAlign),
    },
    content
  );
}
