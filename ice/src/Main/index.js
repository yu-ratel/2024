import React from 'react';
import { Link } from 'react-router-dom';


const Main = () => {
  const contentsInner = {
    margin: '10px',
    width: '50px',
    height: '40px',
    backgroundColor: 'gray',
  }

  return(
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div style={{display: 'flex', flexWrap: 'wrap' }}>
      <button style={{...contentsInner}}></button>
      <button style={{...contentsInner}}></button>
      <button style={{...contentsInner}}></button>
      <button style={{...contentsInner}}></button>
      <button style={{...contentsInner}}></button>
      <button style={{...contentsInner}}></button>
      <button style={{...contentsInner}}></button>
      </div>
      <Link to='/card' style={{ textDecoration: 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ margin: '8px' }}>전체 선택</button>
        <button style={{ margin: '8px' }}>선택</button>
      </div>
      </Link>
    </div>
  )
}

export default Main;
