import React from "react";
import SideMenu from "@/components/common/SideMenu";

const layout = ({ children }) => {
  return (
    <div className="grid md:grid-cols-12">
      <div className="col-span-2">
        <SideMenu />
      </div>

      <div className="col-span-10 pl-7">{children}</div>
    </div>
  );
};

export default layout;
