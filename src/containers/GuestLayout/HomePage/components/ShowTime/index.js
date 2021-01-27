import React, { useState, useEffect } from 'react'
import SystemIcon from './SystemIcon'
import SystemCinema from './SystemCinema'
import { Tabs } from 'antd';
import axios from 'axios'
// import 'antd/dist/antd.css';

const { TabPane } = Tabs;

const ShowTime = () => {

  const [systemCinemaList, setSystemCinemaList] = useState([])

  const fetchSystemListCinema = async () => {
    try {
        const { data } = await axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP07')
        if (data) setSystemCinemaList(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchSystemListCinema()
  }, [])

  return (
      <div className='system-cinema showtime-shadow'>
        <Tabs tabPosition='left'>
          {
            Array.isArray(systemCinemaList) && systemCinemaList.length ? 
              systemCinemaList.map((system, index) => {
                return (
                  <TabPane className='cinema-tab' key={index} tab={<SystemIcon logo={system.logo}/>} key={system.maHeThongRap}>
                    <SystemCinema systemData={system} />
                  </TabPane>
                )
              }) : ''
          }
        </Tabs>
      </div>
  )
}

export default ShowTime