import React from "react";

const IconBlock = ({ children }) => {
    return (
        <div className="h-12 w-12 bg-white flex justify-center items-center">
            {children}
        </div>
    );
};

export default IconBlock;
