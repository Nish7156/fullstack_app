import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';

function forgetPassword() {
    useEffect(() => {
        axios
        .post('http://localhost:1337/api/auth/forgot-password', {
          email: 'test@gmail.com',
          url:
            'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password',
        })
        .then(response => {
          // Handle success.
          console.log('Your user received an email');
        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });
    }, [])
    
  return (
    <div>forgetPassword</div>
  )
}

export default forgetPassword