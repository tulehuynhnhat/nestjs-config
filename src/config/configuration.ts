export interface IConfig {
  env1: string;
  env2: string;
  port: number;
  jwtAccessToken: string;
  jwtRefreshToken: string;
}

export default () => ({
  env1: process.env.ENV1,
  env2: process.env.ENV2,
  port: parseInt(process.env.PORT) || 3000,
  jwtAccessToken: process.env.JWT_ACCESS_TOKEN_SECRET,
  jwtRefreshToken: process.env.JWT_REFESH_TOKEN_SECRET,
});
