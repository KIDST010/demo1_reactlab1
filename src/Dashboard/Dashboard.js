import React, { PureComponent } from 'react'

import Student from '../Component/Student/Student'
import EditName from '../Component/editStudent/edit'
import selectStudent from '../selectStudent/selectStudent';


import './Dashboard.css'


class Dashboard extends PureComponent {
    render() {
        let message = "";
        return (
            <div id="dashboard">
                <Student />
                <selectStudent />
                <EditName />
            </div>
        )
    }
}
export default Dashboard;
