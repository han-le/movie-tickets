import React from 'react'
const titleColor = {
  'BHDStar' : '#8bc541'
}

const Cinema = ({ cinema }) => {
  return (
    <div>
      <div className='flex-box'>
        <p style={{ textAlign: 'left' }}>{cinema.tenCumRap || ''}</p>
      </div>
      <div className='cinema-address' style={{ textAlign:'left' }}>
        {cinema.diaChi && cinema.diaChi.length > 50 ? `${cinema.diaChi.substr(0,30)}...` : cinema.diaChi}
      </div>
      <p style={{ color: 'red', textAlign: 'left' }}>Chi tiet</p>
    </div>
  )
}

export default Cinema
