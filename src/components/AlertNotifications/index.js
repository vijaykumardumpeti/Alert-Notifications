import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import {Component} from 'react'
import Notification from '../Notification'

import './index.css'

const notificationList = [
  {
    id: 1,
    className: 'green',
    component: `${(<AiFillCheckCircle />)}`,
    text: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 2,
    className: 'red',
    component: `${(<RiErrorWarningFill />)}`,
    text: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 3,
    className: 'yellow',
    component: `${(<MdWarning />)}`,
    text: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 4,
    className: 'blue',
    component: `${(<MdInfo />)}`,
    text: 'Info',
    description: 'Anyone on the Internet can view these files',
  },
]
console.log(notificationList[0].component)

export default class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1>Alert Notifications</h1>

        <ul className="notifications-container">
          {notificationList.map(object => (
            <Notification>{object}</Notification>
          ))}
        </ul>
      </div>
    )
  }
}
