import './login.scss';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, error asperiores! Neque itaque impedit</p>
          <span>Don't you have an acount?</span>
          <Link to='/register'>
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
          <h2>Login</h2>
          <form action="">
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;