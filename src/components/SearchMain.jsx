import { useState } from 'react';

const SearchMain = ({ setUsername }) => {
  const [usernameInput, setUsernameInput] = useState('');

  function handleChange(event) {
    setUsernameInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle
    setUsername(usernameInput);
    setUsernameInput(''); // Form gönderildiğinde input alanını temizle
  }
  return (
    <>
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl py-16 sm:py-18 lg:py-24'>
        <div className='sm:mb-8 sm:flex sm:justify-center flex justify-center'>
          <img
            className='w-24 h-24'
            src='src/assets/gh-logo-2x.png'
            alt='Logo'
          />
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Github Followers
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className='w-1/2 border border-gray-300 p-2 rounded-md mt-10 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
              placeholder='Search for a username'
              type='text'
              value={usernameInput}
              onChange={handleChange}
            />
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <button
                type='submit'
                href='#'
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${
                  usernameInput !== ''
                    ? 'bg-green-500 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none pointer-events-none'
                }`}
              >
                Get Followers
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchMain;
