import app, { init } from './app';
import { seeding } from './config/database';

const port = +process.env.SERVER_PORT || 4000;

init().then(() => {
  app.listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Server is listening on port ${port}.`);
    seeding();
  });
});
