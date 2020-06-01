import React from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button, Row, Col, Checkbox } from 'antd';
import './login.scss';

class Login extends React.Component<any, any> {
    public handleLogin = () => {
        console.log('Received values of form: ');
        this.props.history.push("/admin/dashboard");
    }
    public render() {
        return (
            <div className="login-container">
                <Row className="rm-login">
                    <Col span={10} className="login-form">
                        <div className="form-header">
                            REACT MANAGER
                        </div>
                        <div className="form">
                            <Input className="form-input" placeholder="Username" />
                            <Input className="form-input" type="password" placeholder="Password" />
                            <Button type="primary" className="form-button" onClick={this.handleLogin}>Log in</Button>
                        </div>
                        <div className="form-footer">
                            <Checkbox>Remember me</Checkbox>
                            <a className="forgot" href="www">Forgot password</a>
                        </div>
                    </Col>
                    <Col span={14} className="login-ad"></Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Login);