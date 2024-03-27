import { Follower } from './Follower';

const FollowerList = ({ username, followers, addFavorite, favorites }) => {
  return (
    <div className='flex flex-col items-center py-6'>
      <h1 className='text-3xl font-bold mb-4'>
        {username && `${username}'s followers`}
      </h1>
      {/* <input
        className='w-300px border border-gray-300 p-2 rounded-md my-10 focus:outline-none focus:border-green-500 focus:ring-1'
        placeholder='Search for a username'
        type='text'
      /> */}
      {followers && followers.length === 0 && (
        <p className='text-center font-medium'>
          Person dont have any followers 🥲 Try entering a new username !
        </p>
      )}
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        {followers &&
          followers.map((follower) => (
            <Follower
              key={follower.id}
              follower={follower}
              favorites={favorites}
              addFavorite={addFavorite}
            />
          ))}
      </ul>
    </div>
  );
};

export default FollowerList;
