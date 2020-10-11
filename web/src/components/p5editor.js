import React from "react";

{
  /* <iframe src="https://editor.p5js.org/jeeyoonhyun/embed/znOMTCAl2"></iframe> */
}

const p5Editor = ({ node }) => {
  const { url } = node; //you need the curly braces!! (destructuring)
  const splitURL = url.split("/");
  // ["https:", "", "editor.p5js.org", "jeeyoonhyun", "sketches", "5nXV80qXS"]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://editor.p5js.org/${user}/embed/${hash}`;
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
