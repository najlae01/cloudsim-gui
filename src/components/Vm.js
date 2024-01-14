import React, { Component } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Pe from './Pe'
import _ from 'lodash'

import './Vm.css'

class Vm extends Component {
  render() {
    const { id } = this.props.data
    const { hostId } = this.props

    return (
      <div
        className='vm'
        data-tip
        data-for={`vm-${id}-${hostId}`}
        data-event='click'
      >
        <h4>Vm {id}</h4>
        {this._renderBusyPe()}
        {this._renderTooltip()}
      </div>
    )
  }

  _renderBusyPe() {
    const busyPes = _.times(this.props.data.numberOfPes, (index) => {
      return {
        id: index,
        status: 2,
        mips: null,
      }
    })
    return (
      <div className='busy-pe-container'>
        {busyPes.map((pe) => {
          return <Pe key={pe.id} data={pe} />
        })}
      </div>
    )
  }

  _renderTooltip() {
    const {
      id,
      userId,
      uid,
      size,
      mips,
      numberOfPes,
      ram,
      bw,
      vmm,
      inMigration,
      currentAllocatedSize,
      currentAllocatedRam,
      currentAllocatedBw,
    } = this.props.data
    const { hostId } = this.props

    return (
      <ReactTooltip
        id={`vm-${id}-${hostId}`}
        place='right'
        type='info'
        effect='solid'
        class='tooltip'
        globalEventOff='mousemove'
      >
        <div>Id: {id}</div>
        <div>User Id: {userId}</div>
        <div>Unique Id: {uid}</div>
        <div>Size: {size}</div>
        <div>Mips: {mips}</div>
        <div>Number of req pe: {numberOfPes}</div>
        <div>RAM: {ram}</div>
        <div>Bandwidth: {bw}</div>
        <div>Vmm: {vmm}</div>
        <div>In migration:: {inMigration}</div>
        <div>Allocated Size: {currentAllocatedSize}</div>
        <div>Allocated Ram: {currentAllocatedRam}</div>
        <div>Allocated Bw: {currentAllocatedBw}</div>
      </ReactTooltip>
    )
  }
}

export default Vm
