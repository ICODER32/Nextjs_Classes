import React from "react";

export default function layout(props: any) {
  return (
    <html>
      <body>
        Root Layout
        {props.children}
      </body>
    </html>
  );
}
