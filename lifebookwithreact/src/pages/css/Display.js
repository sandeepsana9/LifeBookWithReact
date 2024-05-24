import React, { useState } from 'react';

const Display = () => {
  const [displayValue, setDisplayValue] = useState("flex");
  const handleDisplayValue = ($event) => {
    try {
      setDisplayValue($event.target.value);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='main-container'>
      <h1>Display</h1>
      <p>The display CSS property sets whether an element is treated as a block or inline box and the layout used for its children, such as flow layout, grid or flex. Formally, the display property sets an element's inner and outer display types.</p>
      <h3>1. Example</h3>
      <div className='d-flex'>
        <div>
          <div>&lt;div style="display:
            <select value={displayValue} onChange={handleDisplayValue}>
              <option value="block">block</option>
              <option value="inline">inline</option>
              <option value="inline-block">inline-block</option>
              <option value="flex">flex</option>
              <option value="grid">grid</option>
              <option value="none">none</option>
            </select>
            , border: 2px dashed white, width: 100%, padding: 10px"&gt;</div>
          <div>&lt;div style="border: 1px solid red; width: 100%; height: 200px"&gt;&lt;/div&gt;</div>
          <div>&lt;div style="border: 1px solid red; width: 100%; height: 200px"&gt;&lt;/div&gt;</div>
          <div>&lt;/div&gt;</div>
        </div>
        <div style={{ display: displayValue, border: '2px dashed white', width: '100%', padding: '10px'}}>
          <div className="box" style={{ border: '1px solid red', width: '100%', height: '200px' }}></div>
          <div className="box" style={{ border: '1px solid red', width: '100%', height: '200px' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Display;
