import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/routers';

import { DefaultLayout, HeaderOnly } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((route, i) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.element;

                        let Layout;
                        switch (route.layout) {
                            case null:
                                Layout = Fragment;
                                break;
                            case HeaderOnly:
                                Layout = HeaderOnly;
                                break;

                            default:
                                Layout = DefaultLayout;
                                break;
                        }
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
