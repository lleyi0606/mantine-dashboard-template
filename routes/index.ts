function path(root: string, sub: string) {
  return `${root}${sub}`;
}

const ROOT_DASHBOARD = '/dashboard';

export const PATH_DASHBOARD = {
  root: '/',
  default: '/',
  analytics: path(ROOT_DASHBOARD, '/analytics'),
  saas: path(ROOT_DASHBOARD, '/saas'),
};
