import './register.scss';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Hello Social</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, error asperiores! Neque itaque impedit</p>
          <span>Do you have an acount?</span>
          <Link to='/login'>
            <button>Login</button>
            </Link>
          
        </div>
        <div className="right">
          <h2>Register</h2>
          <form action="">
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;