import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Seach from '~/pages/Seach';

import { HeaderOnly } from '~/compoment/Layout';
const pulicRoute = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/Seach', component: Seach, layout: null },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoute = [];

export { pulicRoute, privateRoute };
