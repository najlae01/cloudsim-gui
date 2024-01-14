import React, { Component } from 'react'
import Host from './Host'

import './DataCenter.css'

class DataCenter extends Component {
  render() {
    const { name } = this.props.data

    return (
      <div className='data-center'>
        <h2>Datacenter - {name}</h2>
        {this._renderHostsList()}
      </div>
    )
  }

  _renderHostsList() {
    const { hosts } = this.props.data

    return (
      <div className='hosts-container'>
        {hosts.map((host) => {
          return <Host key={host.id} data={host} />
        })}
      </div>
    )
  }
}

export default DataCenter
