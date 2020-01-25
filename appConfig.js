const isDev = true;
const appConfig = {
    env: isDev ? 'dev' : 'production',
    ddiscountHeroUrl: isDev ? '192.168.1.103:3000' : 'https://ddiscounthero.com',
}

export { appConfig };
export default { ...appConfig };