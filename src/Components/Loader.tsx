import React, { useEffect } from "react";
import "./Loader.css";
const LearnerLoader = () => {
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 15000);
  //   }, [isLoading]);

  return (
    <>
      {/* {isLoading ? ( */}
      <div className="sk-fading-circle" data-testid="loader">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>
      {/* ) : null} */}
    </>
  );
};

export default LearnerLoader;
