import { Favorite } from './Favorite';

const FavoriteList = ({ favorites, deleteFavorite }) => {
  return (
    <div className='flex flex-col items-center py-6'>
      {favorites && favorites.length === 0 && (
        <p className='text-center font-medium'>
          You don&apos;t have any favorites yet.
        </p>
      )}
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        {favorites &&
          favorites.map((favorite) => (
            <Favorite
              key={favorite.id + 1}
              favorite={favorite}
              deleteFavorite={deleteFavorite}
            />
          ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
