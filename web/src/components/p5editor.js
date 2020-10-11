import React from "react";

const p5Editor = ({ node }) => {
  const { url, themeId = "dark" } = node; // <= add themeId here, default it to "dark"
  const splitURL = url.split("/");
  // [ 'https:', '', 'codepen.io', 'sdras', 'pen', 'gWWQgb' ]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=${themeId}&default-tab=result`; // <= add themeId here
  return (
    <iframe
      height="370"
      style={{ width: "100%" }}
      scrolling="no"
      title="CodePen Embed"
      src={embedUrl}
      frameBorder="no"
      allowTransparency
      allowFullScreen
    />
  );
};

export default p5Editor;
