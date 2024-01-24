import { useState } from 'react';
import axios from 'axios';

const signUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/users/signup', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className='form-group'>
        <label htmlFor=''>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          className='form-control'
        />
      </div>
      <div className='form-group'>
        <label htmlFor=''>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          className='form-control'
        />
      </div>
      {errors.map((err) => {
        return err.message;
      })}
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default signUp;