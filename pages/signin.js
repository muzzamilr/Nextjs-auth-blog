import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Login } from '../components/login';
import { loginUser } from '../store/auth/action-creators';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { setCookie } from 'cookies-next';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn]);

  const handleSubmit = async (user) => {
    await axios.post('http://localhost:3000/api/auth/', user).then((res) => {
      if (res.status === 200) {
        setCookie('token', res.data);
        dispatch(loginUser(user));
      }
    }).catch((err) => console.log(err));
  };

  return (
    <div>
      <Login login={handleSubmit} />
    </div>
  );
};


export default LoginPage;
