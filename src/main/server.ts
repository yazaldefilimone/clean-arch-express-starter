/* tslint:disable:no-console */
import './settings/alias';
import { app } from '~/main/settings/app';
import { env } from '~/shared/env';

app.listen(env.port, () => console.log(`🎯 server running at: ${env.port}`));
