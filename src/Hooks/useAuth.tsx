'use client';

import React, { useState, useContext, createContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import Cookie from 'js-cookie';
import { endPoints } from '../api';
import { UserSchema } from '../api/users/usersSchemas';

export let fetchedToken = null as string | null;

interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface AuthContextProps {
  user: UserSchema | null;
  // eslint-disable-next-line no-unused-vars
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function ProviderAuth({ children }: Props) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<UserSchema | null>(null);

  const fetchUser = async () => {
    const id = Cookie.get('id');

    if (id && window.location.pathname !== '/') {
      try {
        axios.defaults.headers.common['Authorization'] = `${id}`;
        const { data: user } = await axios.get(endPoints.users.profile(id));
        setUser(user);
      } catch (error: any) {
        if (error.response === 401) {
          Cookie.remove('id');
          delete axios.defaults.headers.common['Authorization'];
          window.location.href = '/login';
        }
      }
    } else if (window.location.pathname === '/' || window.location.pathname.includes('/signup')) {
      setUser(null);
    } else {
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
  };
  const pathname = usePathname();
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const login = async (email: string, password: string) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(endPoints.auth.login, { email, password }, options);
    if (data._id) {
      const id = data._id;
      Cookie.set('id', id, { expires: 5 });

      axios.defaults.headers.common['Authorization'] = `${id}`;
      const { data: user } = await axios.get(endPoints.users.profile(id));
      setUser(user);
    }
  };

  const logout = () => {
    Cookie.remove('id');
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    window.location.href = '/login';
  };

  return {
    user,
    login,
    logout,
  };
}
