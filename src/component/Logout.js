import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'antd';
import 'antd/dist/antd.css';

const Logout = () => {
    const { logout } = useAuth0()

    return (
        <Button onClick={logout} type="primary" size='large'>
            Log out
        </Button>
    )
}

export default Logout