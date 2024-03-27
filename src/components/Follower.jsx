import { StarIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export const Follower = ({ follower, addFavorite, favorites }) => {
  const [isFavorited, setIsFavorited] = useState(favorites.includes(follower));

  const handleFavorite = () => {
    addFavorite(follower);
    setIsFavorited(true);
  };

  return (
    <li className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'>
      <div className='flex flex-1 flex-col p-8'>
        <img
          className='mx-auto h-32 w-32 flex-shrink-0 rounded-full'
          src={follower.avatar_url}
          alt=''
        />
        <h3 className='mt-6 text-sm font-medium text-gray-900'>
          {follower.login}
        </h3>
        <dl className='mt-1 flex flex-grow flex-col justify-between'>
          <dt className='sr-only'>Title</dt>
          <dd className='text-sm text-gray-500'>{follower.login}</dd>
          <dt className='sr-only'>Role</dt>
          <dd className='mt-3'>
            <span className='inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>
              {follower.html_url}
            </span>
          </dd>
        </dl>
      </div>
      <div>
        <div className='-mt-px flex divide-x divide-gray-200'>
          <div className='flex w-0 flex-1'>
            <button
              disabled={isFavorited}
              onClick={handleFavorite}
              className={
                isFavorited
                  ? 'relative bg-gray-400 -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
                  : 'relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 transition-all'
              }
            >
              <StarIcon className='h-5 w-5 text-white' aria-hidden='true' />
              {isFavorited ? 'Already added' : 'Favorite'}
            </button>
          </div>
          <div className='-ml-px flex w-0 flex-1'>
            <a
              href={`https://github.com/${follower.login}`}
              target='_blank'
              className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-all'
            >
              <InformationCircleIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
              More info
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};
