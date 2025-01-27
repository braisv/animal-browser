import { useLocation } from 'react-router-dom';

export const isHome = (): boolean => {
  const { pathname } = useLocation();
  return pathname === '/';
};
