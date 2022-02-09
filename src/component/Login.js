import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'antd';
import 'antd/dist/antd.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick={loginWithRedirect} type="primary" size='large'>
            Log in
        </Button>
    )
}

export default Login