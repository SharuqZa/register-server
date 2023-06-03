import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [gender, setGender] = useState('');


  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
      }

      if (address.length < 0) {
        alert('please enter the address');
        return;
      }

      if (name.length < 0) {
        alert('please enter the name');
        return;
      }

      if (email.length < 8) {
        alert('email must be use @ character');
        return;
      }
  
      const formData = {
        name:name,
        address:address,
        email:email,
        password:password,
        acceptedTerms:acceptedTerms,
        gender:gender,
      };
  
      axios.post('http://localhost:3000/api/register',formData)
        .then((response) => {
          console.log(response.data);
          // Reset form fields
          setName('');
          setAddress('');
          setEmail('');
          setPassword('');
          setAcceptedTerms(false);
          setGender('');
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    };
  
return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-red mt-5 rounded-lg shadow-lg text-center"
      >
        <h1 className='font-bold text-3xl  text-blue-500 mb-6'>REGISTER</h1>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="name">
            Address
          </label>
          <input
            type="textarea"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full h-24 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="radio"
            id="male"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="male" className="text-sm">
            Male
          </label>
          <input 
            type="radio"
            id="female"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
            className="mr-2 ml-4"
          />
          <label htmlFor="female" className="text-sm">
            Female
          </label>
          <input 
            type="radio"
            id="Others"
            value="Others"
            checked={gender === 'Others'}
            onChange={(e) => setGender(e.target.value)}
            className="mr-2 ml-4"
          />
          <label htmlFor="Others" className="text-sm">
            Others
          </label>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm">
            I accept the terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 text-white border border-blue-500 rounded cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;