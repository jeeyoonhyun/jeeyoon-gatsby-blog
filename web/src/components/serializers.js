import React from "react";
import Figure from "./Figure";
import YouTube from "./youtube";
import CodePen from "./codepen";
import p5Editor from "./p5editor";

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: YouTube,
    codepen: CodePen,
    p5editor: p5Editor,
  },
};

export default serializers;
