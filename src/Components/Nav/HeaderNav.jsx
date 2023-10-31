import React from "react";

function HeaderNav() {
  return (
    <>
      <nav className="bg-yellow-400 p-4">
        <div className="flex items-center justify-center">
          {" "}
          <div className="flex items-center">
            <a href="#" className="text-white text-lg font-bold">
              Header
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderNav;
