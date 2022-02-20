const authHeader = (accessToken = '') => ({
  Authorization: `Bearer ${accessToken}`
})

export default authHeader
