import React, { useState } from "react";

const Hover = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img alt="nature_image" src={"foot.jpeg "} className="hoverimage" />
        </div>

        {isHovering && (
          <h4 className="hoverquote">
            <span>&nbsp;1000 hrs energy have been saved &nbsp;</span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default Hover;
