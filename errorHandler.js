import * as Sentry from 'sentry-expo';
import { SENTRY_PUBLIC_KEY, SENTRY_PROJECT_ID } from 'react-native-dotenv'

Sentry.init({
    dsn: `https://${SENTRY_PUBLIC_KEY}@sentry.io/${SENTRY_PROJECT_ID}`,
    enableInExpoDevelopment: true,
    debug: true,
});

export { Sentry };