import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
function App() {
    function setupLayout(route) {
        if (route.layout !== undefined) {
            if (route.layout===null){return Fragment}
            return route.layout;
        } else {
            return DefaultLayout;
        }
    }
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map(function (route, index) {
                        const Layout = setupLayout(route);
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
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
