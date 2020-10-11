import React from "react";
import Figure from "./Figure";
import YouTube from "./youtube";

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: YouTube,
  },
};

export default serializers;
