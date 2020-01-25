const isDev = true;
const appConfig = {
    env: isDev ? 'dev' : 'production',
    ddiscountHeroUrl: isDev ? 'http://192.168.1.103:3000' : 'https://ddiscounthero.com',
}

export default appConfig;