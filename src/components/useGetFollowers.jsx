import { useState, useEffect } from 'react';

export function useGetFollowers(username) {
  const [followers, setFollowers] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showError, setShowError] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const API_URL = 'https://api.github.com/users/';

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prevPage) => prevPage + 1); // Yeni sayfa verilerini getir
    } else if (document.documentElement.scrollTop === 0) {
      setShowScrollTop(false);
    } else {
      setShowScrollTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [username]);

  useEffect(() => {
    const getFollowers = async () => {
      if (!username) return;
      try {
        setError('');
        const response = await fetch(
          `${API_URL}${username}/followers?per_page=100&page=${page}`
        );
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('User not found');
          } else {
            const errorMessage = `HTTP Error: ${response.status}`;
            throw new Error(errorMessage);
          }
        }
        const data = await response.json();

        if (page > 1) {
          // If page > 1, append new followers to the existing list
          setFollowers((prevFollowers) => [...prevFollowers, ...data]);
        } else {
          setFollowers(data);
        }
        setError(null);
        setShowError(false);
      } catch (error) {
        const errorMessage = error.message || 'Unkown Error';
        setError(errorMessage);
        setShowError(true);
      }
    };
    getFollowers(); // useEffect içinde getFollowers fonksiyonunu çağır
  }, [username, page]);

  return {
    followers,
    error,
    showError,
    setShowError,
    showScrollTop,
  };
}
