import React, { useState } from 'react';

const Contact = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState('');

  function handleName(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSubject(event) {
    event.preventDefault();
    setSubject(event.target.value);
  }

  function handleEmail(event) {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function handleMessage(event) {
    event.preventDefault();
    setMessage(event.target.value);
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const onSubmit = () => {
    if (name === '') {
      setErrors('Name is required');
    }
    if (email === '') {
      setErrors('Email is required');
    }
    if (subject === '') {
      setErrors('Subject is required');
    }
    if (message === '') {
      setErrors('Message is required');
    }
    if (validateEmail(email) === false) {
      setErrors('Email is not valid');
    }
    if (name !== '' && email !== '' && subject !== '' && message !== '' && validateEmail(email) === true) {
      setErrors('');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      window.open(`mailto:csiddu2021@gmail.com?subject=${subject}&body=${message} \nRegards ${name + email}`);
    }

  };

  return (
    <div className="grid">
      <div className="justify-self-center">
        <div className="grid p-5">
          <p className="justify-self-center text-4xl font-bold">Drop Us A Line</p>
        </div>
        <form class="mt-10 w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Full Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" onChange={(e) => handleName(e)} />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email Address
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" onChange={(e) => handleEmail(e)} />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Subject
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" onChange={(e) => handleSubject(e)} />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Message
              </label>
              <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" onChange={(e) => handleMessage(e)}></textarea>
            </div>
          </div>
          <div>
            <div class="grid pb-14">
              <span className="text-red-500">{errors}</span>
              <button class="shadow justify-self-center bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold text-xl bg-black py-2 px-4 rounded" type="button" onClick={onSubmit}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Contact;

