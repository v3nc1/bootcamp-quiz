import React from "react";

//dumb component
//stateless component
//view component, pure presentational
export function PrintText({ color, fontSize, backgroundColor, children }) {
  // comment
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
        fontSize: fontSize
      }}
    >
      {children}>{children}
    </div>
  );
}
