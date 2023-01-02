import { gql } from "@apollo/client";
import React from "react";

export const FREEFORM_BLOCK_ATTRIBUTES = gql`
  fragment FreeformBlockAttributes on CoreFreeformBlockAttributes {
    content
  }
`;

const FreeFormBlock = ({ attributes, innerBlocks }) => {
  console.log("ATTR: ", attributes);
  console.log("INNER: ", innerBlocks);
  return <div>FREEFORM</div>;
};

export default FreeFormBlock;
