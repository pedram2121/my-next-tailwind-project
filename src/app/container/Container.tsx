import React from "react";

interface Ichildren {
  children: React.ReactNode;
}

function Container({ children }: Ichildren) {
  return <div className="max-w-screen-xl mx-auto px-10">{children}</div>;
}

export default Container;
