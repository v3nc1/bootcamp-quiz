import React from "react";

/**
 * @description
 * Example of a simple stateless ("dumb") component
 * Outputs the children received through props and set some basic styling with values also received through props
 *  */
export function PrintText(props) {
  /**
   * destructure from props into variables
   * we could write this as
   *    const color = props.color
   *    const fontSize = props.fontSize
   * ...and so on
   */
  const { color, fontSize, backgroundColor, children } = props;

  /***
   * "children" is a special property that is usually passed using a xml element syntax
   *  <PrintText>
   *       <div>TEST</div>
   *   <PrintText>
   *  For example, here the <div>TEST</div> will be passed as "children" property
   *  */
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
        fontSize: fontSize
      }}
    >
      {children}
    </div>
  );
}
