import { Fragment } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { pulicRoute } from '~/routes';
import { DefaultLayout } from '~/layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {pulicRoute.map((route, i) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
