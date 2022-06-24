import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Seach from '~/pages/Seach';
import Live from '~/pages/Live';
import config from '~/config';

import { HeaderOnly } from '~/layout';
const pulicRoute = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.seach, component: Seach, layout: null },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];
const privateRoute = [];

export { pulicRoute, privateRoute };
