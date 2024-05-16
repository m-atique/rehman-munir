"use client"
import React from 'react';

const Spinner = (props) => {
  const spinnerStyle = `
    @keyframes ldio-ygtxjlxlhl {
      0% {
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 15.66%;
        left: 15.66%;
        width: 70%;
        height: 70%;
        opacity: 0;
      }
    }
    .ldio-ygtxjlxlhl div {
      position: absolute;
      border-width: 3.48px;
      border-style: solid;
      opacity: 1;
      border-radius: 50%;
      animation: ldio-ygtxjlxlhl 1s cubic-bezier(0,0.2,0.8,1) infinite;
    }
    .ldio-ygtxjlxlhl div:nth-child(1) {
      border-color: #e90c59;
      animation-delay: 0s;
    }
    .ldio-ygtxjlxlhl div:nth-child(2) {
      border-color: #46dff0;
      animation-delay: -0.5s;
    }
    .loadingio-spinner-ripple-6mcbqhbnh2j {
      width: 100%;
      height: 100%;
      display: inline-block;
      overflow: hidden;
      backgroundColor:"red"
      
    }
    .ldio-ygtxjlxlhl {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(1);
      backface-visibility: hidden;
      transform-origin: 0 0; /* see note above */
    }
    .ldio-ygtxjlxlhl div { box-sizing: content-box; }
  `;

 
  return (
    <div className={`w-${props.width} h-${props.height}`}>
      <style>{spinnerStyle}</style>
      <div className="loadingio-spinner-ripple-6mcbqhbnh2j">
        <div className="ldio-ygtxjlxlhl">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
