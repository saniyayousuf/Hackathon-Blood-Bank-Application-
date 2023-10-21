import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Notification from "../../Screens/admin_screens/Notification"
import Email from "../../Screens/admin_screens/Email"
import Inbox from "../../Screens/admin_screens/Inbox"
import Message from "../../Screens/admin_screens/Message"
import Trash from "../../Screens/admin_screens/Trash"
import Dashboard from '../../Screens/Dashboard'
import Comments from '../../Screens/admin_screens/Comments';
import Login from '../../Screens/Login';
import Signup from '../../Screens/Signup';
import BasicButton from '../../components/Button';
import IconButtons from '../../components/IconButton';
import BasicSwitches from '../../components/Switch';
import Input from '../../components/Input';
import Home from '../../Screens/Home';
import Table from '../../components/DynamicTable';
import BasicDatePicker from '../../components/DatePicker';
import APIProject from '../../pages/APIproject';
import AddProject from '../../pages/AddProject';
import Protected from '../../Screens/protected';
import Profile from '../../Screens/BloodApp Screens/Profile';
import Form from '../../components/RegForm';




function Approuter() {
    const useMUI = true;
    return (
        <Router>
            <>
              
                <Routes>
                    {/* <Route path="Notification" element={<Notification />} />
                    <Route path="Email" element={<Email />} />
                    <Route path="Inbox" element={<Inbox />} />
                    <Route path="Message" element={<Message />} />
                    <Route path="Trash" element={<Trash />} />
                    <Route path="Comments" element={<Comments />} /> */}
                    <Route path="login" element={<Login useMUI={useMUI} />} />
                    <Route path="/" element={<Signup useMUI={useMUI} />} />
                    <Route path="signup" element={<Signup useMUI={useMUI} />} />
                 
                    <Route path="profile" element=  {<Protected Screen={Profile} />} />

                    {/* <Route path="dashboard/*" element={<Dashboard />} />
                    <Route path="/" element={<Protected Screen={Home} />} />
                    <Route path="project" element={<APIProject />} />
                    <Route path="add/" element={< AddProject />} />
                    <Route path="add/:id" element={<AddProject />} /> */}
                </Routes>
            </>
        </Router>

    );
}

export default Approuter;
