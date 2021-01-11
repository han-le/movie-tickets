import React, { useState, useEffect } from 'react'
import Cinema from './Cinema'
import { Tabs } from 'antd';
import axios from 'axios'

const { TabPane } = Tabs;

const SystemCinema = ({ systemId }) => {
  
  const [cinemaList, setCinemaList] = useState([])

  const fetchSystemListCinema = async (id) => {
    try {
        const { data } = await axios.get(`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`)
        if (data) setCinemaList(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() =>{
    fetchSystemListCinema(systemId)
  }, [systemId])

  return (
    <div>
      {<Tabs tabPosition='left'>
          {
            Array.isArray(cinemaList) && cinemaList.length ? 
              cinemaList.map((cinema, index) => {
                return (
                  <TabPane key={index} tab={<Cinema systemId={systemId} cinemaData={cinema} />} key={index}>
                    111
                  </TabPane>
                )
              }) : ''
          }
        </Tabs>   } 
    </div>
  )
}

export default SystemCinema
