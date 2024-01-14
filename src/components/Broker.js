import React, { Component } from 'react'
import Cloudlet from './Cloudlet'
import _ from 'lodash'

import './Broker.css'

class Broker extends Component {
  render() {
    const { id, cloudletList, cloudletReceivedList } = this.props.data

    return (
      <div className='broker'>
        <h2>Broker {id || null}</h2>
        <h3>Cloudlet list</h3>
        {this._renderCloudletList(cloudletList)}
        <h3>Cloudlet submitted list</h3>
        {this._renderCloudletList(this._removeSubmittedCloudletsThatFinished())}
        <h3>Cloudlet received list</h3>
        {this._renderCloudletList(cloudletReceivedList)}
      </div>
    )
  }

  _removeSubmittedCloudletsThatFinished() {
    const { cloudletSubmittedList, cloudletReceivedList } = this.props.data

    return _.filter(cloudletSubmittedList, (cloudlet) => {
      return !_.some(cloudletReceivedList, cloudlet)
    })
  }

  _renderCloudletList(cloudletList) {
    if (!cloudletList) {
      return null
    }

    return (
      <div className='cloudlet-container'>
        {cloudletList.map((cloudlet) => {
          return (
            <Cloudlet
              key={cloudlet.cloudletId}
              data={cloudlet}
              brokerId={this.props.data.id}
            />
          )
        })}
      </div>
    )
  }
}

export default Broker
