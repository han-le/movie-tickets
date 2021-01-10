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
        const { data } = await axios.get('https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap')
        if (data) setSystemCinemaList(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchSystemListCinema()
  }, [])

  return (
    <div className="showTime__content container">
      <div className='flex-box'>
        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/599/599887.svg" alt="trending-icon"/>
        <h3 className="section__title">Today we have</h3>
      </div>
      <div className='system-cinema'>
        <Tabs tabPosition='left'>
          {
            Array.isArray(systemCinemaList) && systemCinemaList.length ? 
              systemCinemaList.map((system, index) => {
                return (
                  <TabPane key={index} tab={<SystemIcon logo={system.logo}/>} key={system.maHeThongRap}>
                    <SystemCinema systemId={system.maHeThongRap} />
                  </TabPane>
                )
              }) : ''
          }
        </Tabs>
      </div>
    </div>
  )
}

export default ShowTime
