// src/components/GLTFPreview.js
import React from "react";

function GLTFPreview({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} style={{ width: "100%" }} />
    </div>
  );
}

export default GLTFPreview;
