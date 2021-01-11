import React from 'react'
const titleColor = {
  'BHDStar' : '#8bc541'
}

const Cinema = ({ cinemaData, systemId }) => {
  console.log('cinemaData', cinemaData.diaChi.trim())
  return (
    <div>
      <div className='flex-box'>
        <p><span style={{ color: titleColor[systemId] }}>{systemId}</span> - {cinemaData.tenCumRap}</p>
      </div>
      <div style={{ textAlign:'left' }}>
        {cinemaData.diaChi}
        <p style={{ color: 'red' }}>Chi tiet</p>
      </div>
    </div>
  )
}

export default Cinema
