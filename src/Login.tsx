import React, { useState } from 'react';
import './Login.css'
import Button from '@mui/material/Button';
import socialMediaAuth from './service/auth';
import { githubProvider } from './config/authMehotd';
import firebase from 'firebase/compat';

export default function LoginForm() {
    const hundleOnClick = async (provider: firebase.auth.AuthProvider) => {
        const res = await socialMediaAuth(provider)
        console.log(res)
    }

    const [userId, setUserId] = useState<string>("")
    const [password, setPassword] = useState<string | number>("")

    const changeUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value)
    }

    const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return (
        <div className='b-parent'>
            <div className='b-inner'>
                <Button type="submit" variant="outlined" onClick={() => hundleOnClick(githubProvider)}>Log in</Button>
            </div>
        </div>
    )
}