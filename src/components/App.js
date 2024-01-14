import React, { Component } from 'react'
import AppBar from '@mui/material/AppBar'
import DataCenter from './DataCenter'
import Broker from './Broker'

import './App.css'

class App extends Component {
  render() {
    const { dataCenterList, brokerList } = this.props.data

    return (
      <div className='app'>
        <AppBar
          title={`cloudsim-ui - clock: ${this.props.data.clock || 0}`}
          showMenuIconButton={false}
        />
        <div className='content-container'>
          <div className='datacenters-container'>
            {this._renderDataCenters(dataCenterList)}
          </div>
          <div className='brokers-container'>
            {this._renderBrokers(brokerList)}
          </div>
        </div>
      </div>
    )
  }

  _renderBrokers(brokerList) {
    if (!brokerList) {
      return null
    }
    return brokerList.map((broker) => {
      return <Broker key={broker.id} data={broker} />
    })
  }

  _renderDataCenters(dataCenters) {
    if (!dataCenters) {
      return null
    }
    return dataCenters.map((dataCenter) => {
      return <DataCenter key={dataCenter.name} data={dataCenter} />
    })
  }
}

export default App
