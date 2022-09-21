// routers
import routersConfig from '~/config/routers';

// Layouts
import { HeaderOnly } from '~/components/Layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRouter = [
    { path: routersConfig.home, element: Home },
    { path: routersConfig.following, element: Following },
    { path: routersConfig.profile, element: Profile },
    { path: routersConfig.upload, element: Upload, layout: HeaderOnly },
    { path: routersConfig.search, element: Search, layout: null },
];

const privateRoutes = [];

export { publicRouter, privateRoutes };
