import React from 'react';
import Layout from '../../layouts/Layout';

const Register = () => {

    return (
        <Layout>
        <div className="login-wrapper">
        <h1>Please Register</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" name='username'/>
          </label>
          <label>
            <p>Email</p>
            <input type="email" name='email'/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" name='password'/>
          </label>
          <label>
            <p>Confirm Password</p>
            <input type="Password" name='confirmPassword'/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      </Layout>
    );
};

export default Register;