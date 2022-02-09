import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { useAuth0 } from "@auth0/auth0-react";
import './auth.css'

const Auth0 = () => {
    const { isAuthenticated, isLoading, user } = useAuth0()
    return (
        <div className='auth'>
            {isLoading ? <h3>Loading</h3> :
                isAuthenticated ? (
                    <Logout />
                ) : (
                    <Login />
                )}
            { isAuthenticated && 
            <div className='user'>
                <img src={user.picture} alt={user.name}/>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
            </div>
            }
        </div>
    )
}

export default Auth0