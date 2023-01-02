import React from "react";

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

  return React.createElement(
    tag,
    {
      className: getClassName(textAlign),
    },
    content
  );
}
