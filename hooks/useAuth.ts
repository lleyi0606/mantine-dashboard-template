'use client';

// Simple stub implementation so the rest of the UI can keep calling `useAuth`
// without pulling in next-auth or any actual authentication logic.
// It always returns a "guest" user that is treated as authenticated.

export const useAuth = () => {
  const login = async () => true;
  const logout = () => {};

  return {
    user: { name: 'Guest' },
    permissions: [],
    roles: [],
    isAuthenticated: true,
    isLoading: false,
    login,
    logout,
    accessToken: null as string | null,
  } as const;
};
