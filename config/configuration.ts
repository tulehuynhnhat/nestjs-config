export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  jwt: {
    accessToken: process.env.JWT_ACCESS_TOKEN_SECRET,
    refreshToken: process.env.JWT_REFESH_TOKEN_SECRET,
  },
  env1: process.env.ENV1,
  env2: process.env.ENV2,
});
