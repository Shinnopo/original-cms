import React from 'react';
import './Login.css'
import TextField from '@mui/material/TextField';

export default function LoginForm() {
    return (
        <div className='b-parent'>
            <div className='b-inner'>
                <TextField
                    required
                    id="outlined-required"
                    label="User Name"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
        </div>
    )
}