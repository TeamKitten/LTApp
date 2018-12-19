import * as React from "react";

export const NoMatch = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      height: "calc(100vh - 48px - 48px)"
    }}
  >
    <h1>404 NOT FOUND</h1>
  </div>
);
