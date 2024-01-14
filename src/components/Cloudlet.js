import React, { Component } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './Cloudlet.css'

class Cloudlet extends Component {
  render() {
    const { cloudletId, status } = this.props.data
    const { brokerId } = this.props

    return (
      <div
        className='cloudlet'
        data-tip
        data-for={`cloudlet-${cloudletId}-${brokerId}`}
        data-event='click'
      >
        <h4>Cloudlet - {cloudletId}</h4>
        {status}
        {this._renderTooltip()}
      </div>
    )
  }

  _renderTooltip() {
    const {
      cloudletId,
      cloudletLength,
      cloudletFileSize,
      cloudletOutputSize,
      numberOfPes,
      status,
      execStartTime,
      finishTime,
    } = this.props.data
    const { brokerId } = this.props

    return (
      <ReactTooltip
        id={`cloudlet-${cloudletId}-${brokerId}`}
        place='right'
        type='info'
        effect='solid'
        class='tooltip'
        globalEventOff='mousemove'
      >
        <div>Id: {cloudletId}</div>
        <div>Length: {cloudletLength}</div>
        <div>FileSize: {cloudletFileSize}</div>
        <div>OutputSize: {cloudletOutputSize}</div>
        <div>Number of req Pe:{numberOfPes}</div>
        <div>Status: {status}</div>
        <div>ExecStartTime: {execStartTime}</div>
        <div>ExecFinishTime: {finishTime}</div>
      </ReactTooltip>
    )
  }
}

export default Cloudlet
