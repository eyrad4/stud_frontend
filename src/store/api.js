const HTTP = process.env.ROOT_API
export default {
  signup: HTTP + 'register',
  signin: HTTP + 'login',
  logout: HTTP + 'logout',
  dataConfig: HTTP + 'alldata',
  createAd: HTTP + 'create',
  showAd: HTTP + 'product/'
}
