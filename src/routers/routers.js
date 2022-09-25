// routers
import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRouter = [
    { path: config.routers.home, element: Home },
    { path: config.routers.following, element: Following },
    { path: config.routers.live, element: Live },
    { path: config.routers.profile, element: Profile },
    { path: config.routers.upload, element: Upload, layout: HeaderOnly },
    { path: config.routers.search, element: Search, layout: null },
];

const privateRoutes = [];

export { publicRouter, privateRoutes };
