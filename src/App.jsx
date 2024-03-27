import { useState, useEffect } from 'react';
import FollowerList from './components/FollowerList';
import Tabbed from './components/Tabbed';
import ScrollTop from './components/ScrollTop';
import ErrorMessage from './components/ErrorMessage';
import SearchMain from './components/SearchMain';
import { useGetFollowers } from './components/useGetFollowers';
import FavoriteList from './components/FavoriteList';

export default function App() {
  const [username, setUsername] = useState('');
  const [currentTab, setCurrentTab] = useState('Followers');

  const { followers, error, showError, setShowError, showScrollTop } =
    useGetFollowers(username);

  const [favorites, setFavorite] = useState(() => {
    const storageFavorites = localStorage.getItem('favorites');
    return storageFavorites ? JSON.parse(storageFavorites) : [];
  });
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function handleDeleteFavorite(favorite) {
    setFavorite(favorites.filter((item) => item.login !== favorite.login));
  }

  function handleAddFavorite(follower) {
    //prevent duplicates
    if (favorites.find((item) => item.login === follower.login)) return;
    setFavorite((prevFavorite) => [...prevFavorite, follower]);
  }

  const handleCloseError = () => {
    setShowError((prevShowError) => !prevShowError); // Close the error message
  };

  return (
    <>
      {showScrollTop && <ScrollTop />}
      <SearchMain setUsername={setUsername} />
      <Tabbed
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        followCount={followers && followers?.length}
        favCount={favorites && favorites?.length}
      />
      {currentTab === 'Followers' ? (
        <FollowerList
          username={username}
          followers={followers}
          addFavorite={handleAddFavorite}
          favorites={favorites}
        />
      ) : (
        <FavoriteList
          favorites={favorites}
          deleteFavorite={handleDeleteFavorite}
        />
      )}

      {showError && <ErrorMessage message={error} onClose={handleCloseError} />}
    </>
  );
}
