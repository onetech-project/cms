import { logo } from '../../assets';
import './index.css';

const Login = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>Login Page</p>
        <a className="App-link" href="/">
          Go Home
        </a>
      </header>
    </div>
  );
};

export default Login;
