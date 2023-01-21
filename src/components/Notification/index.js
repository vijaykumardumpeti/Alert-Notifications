import {Component} from 'react'

import {GrFormClose} from 'react-icons/gr'

import './index.css'

export default class Notification extends Component {
  render() {
    const {children} = this.props

    const {id, className, component, text, description} = children
    return (
      <li key={id} className="notification-item-container">
        <div>{component}</div>
        <div className="container-2">
          <h1 className={className}>{text}</h1>
          <p>{description}</p>
        </div>
        <div>
          <GrFormClose />
        </div>
      </li>
    )
  }
}
