import React from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
function Login(props) {
    const { handleLoggedIn } = props;
    return (<Form name="normal_login" className="login-form">login</Form>
    );
}
export default Login;