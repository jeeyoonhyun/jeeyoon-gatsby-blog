import React from "react";

const p5Editor = ({ node }) => {
  const { url = "" } = node; //you need the curly braces!! (destructuring)
  const splitURL = url.split("/");
  // ["https:", "", "editor.p5js.org", "jeeyoonhyun", "sketches", "5nXV80qXS"]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://editor.p5js.org/${user}/embed/${hash}`;
  // bypass for server-side rendering (ignore window element in node)
  // https://github.com/gatsbyjs/gatsby/issues/9214#issuecomment-431073612
  // https://github.com/gatsbyjs/gatsby/issues/9038
  return (
    <iframe
      src={embedUrl}
      height="370"
      style={{ width: "100%" }}
      scrolling="no"
      title="p5.js Editor Embed"
      frameBorder="no"
      allowTransparency
      allowFullScreen
    />
  );
};

export default p5Editor;
