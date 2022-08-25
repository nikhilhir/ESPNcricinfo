import { serializeStyles } from '@emotion/serialize';
import React from 'react'
import "./Live.module.css"

const Live = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>live </h1>
      <div style={{ display: "flex" }}>
        <div>
          <button>T20</button>
        </div>
        <div>
          <button>T20</button>
        </div>
        <div>
          <button>T20</button>
        </div>
        <div>
          <button>T20</button>
        </div>
        <div>
          <button>T20</button>
        </div>
      
      </div>
      
    </>
  );
}

export default Live