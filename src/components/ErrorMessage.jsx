// import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

// const ErrorMessage = ({ message, onClose }) => {
//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div>
//       <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-yellow-50 rounded-md p-4'>
//         <div className='flex items-center'>
//           <div className='flex-shrink-0'>
//             <ExclamationTriangleIcon
//               className='h-5 w-5 text-yellow-400'
//               aria-hidden='true'
//             />
//           </div>
//           <div className='ml-3'>
//             <h3 className='text-sm font-medium text-yellow-800'>{message}</h3>
//             <div className='mt-2 text-sm text-yellow-700'>
//               <p>Please try again.</p>
//             </div>
//           </div>
//           <button onClick={handleClose} className='ml-auto pl-3'>
//             <span className='sr-only'>Close</span>
//             <svg
//               className='h-5 w-5 text-yellow-400'
//               xmlns='http://www.w3.org/2000/svg'
//               viewBox='0 0 20 20'
//               fill='currentColor'
//               aria-hidden='true'
//             >
//               <path
//                 fillRule='evenodd'
//                 d='M10 1a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm5.293 5.293a1 1 0 0 0-1.414-1.414L10 8.586 6.121 4.707a1 1 0 0 0-1.414 1.414L8.586 10l-3.879 3.879a1 1 0 1 0 1.414 1.414L10 11.414l3.879 3.879a1 1 0 0 0 1.414-1.414L11.414 10l3.879-3.879z'
//                 clipRule='evenodd'
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorMessage;

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function ErrorMessage({ message, onClose }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    onClose();
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                <div className='absolute right-0 top-0 hidden pr-4 pt-4 sm:block'>
                  <button
                    type='button'
                    className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    onClick={handleClose}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='sm:flex sm:items-start'>
                  <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                    <ExclamationTriangleIcon
                      className='h-6 w-6 text-red-600'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                    <Dialog.Title
                      as='h3'
                      className='text-base font-semibold leading-6 text-gray-900'
                    >
                      Something went wrong😢
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>{message}</p>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
                    onClick={handleClose}
                  >
                    Try Again
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
