import React, { useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import Cookies from 'js-cookie';
import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export function SignIn() {
  const uname = useRef();
  const navigate = useNavigate();

  // Pre-fill NIN number when the component loads
  useEffect(() => {
    if (uname.current) {
      uname.current.value = '1234567890'; // Suggest the NIN number
    }
  }, []);

  const handleLogin = async () => {
    const username = uname.current.value;

    if (!username) {
      // If the input field is empty
      alert("Please enter your Hospital ID/NIN number.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login success logic here
        alert(`Login successful for ${data.name}`);
        Cookies.set('hospital', data.name);
        Cookies.set('nin', username);

        // Redirect to the Dashboard page after successful login
        navigate('/dashboard'); // Ensure that Dashboard route is set correctly in App.jsx
      } else {
        // Login failure logic here
        alert('Invalid credentials');
        console.log(data);
      }
    } catch (error) {
      console.error('Error logging in:', error);

      // Redirect to Dashboard if the server is unavailable or in case of any error
      navigate('/dashboard');
    }
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">
            Enter your Hospital ID/NIN number to Sign In.
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Hospital ID/NIN Number
            </Typography>
            <Input
              ref={uname}
              size="lg"
              placeholder="Enter hospital ID/NIN number"
              defaultValue="1234567890" // Suggested NIN number
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6" fullWidth onClick={handleLogin}>
            Sign In
          </Button>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered?
            <Link to="/sign-up" className="text-gray-900 ml-1">Create account</Link>
          </Typography>
        </form>
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}

export default SignIn;
