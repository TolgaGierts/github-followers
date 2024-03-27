const ScrollTop = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
      className='flex flex-col items-center fixed bottom-5 right-5 sm:fixed  px-2 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 transition-all z-10'
    >
      {' '}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M5 11l7-7 7 7M5 19l7-7 7 7'
        />
      </svg>
      Scroll Top
    </button>
  );
};

export default ScrollTop;
