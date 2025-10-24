import { useState, useEffect } from "react";

function WindowWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
  
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("Window resized:", window.innerWidth);
    };

  
    window.addEventListener("resize", handleResize);

    
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Listener removed!");
    };
  }, []); 

  return (
    <div>
      <h2 className="heading" >Current window width: {width}px</h2>
    </div>
  );
}

export default WindowWidthTracker;
