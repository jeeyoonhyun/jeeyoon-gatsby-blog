import React from "react";
import Figure from "./Figure";
import YouTube from "./youtube";
import CodePen from "./codepen";

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: YouTube,
    codepen: CodePen,
  },
};

export default serializers;
