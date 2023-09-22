
import './index.css';
import routes from './config/routes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store'

import AuthChecker from './auth/AuthChecker';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      {/* we'll map over routes and generate information frm them */}
      <Navbar />
      <Provider store={store}>
        <Routes>
          {routes.map((route: any, index: any) => (
            <Route
              key = {index}
              path = {route.path}
              element = {
                route.protected ? (
                <AuthChecker>
                  <route.component />
                </AuthChecker>
                ) : (
                  <route.component />
                )
              
              }
            />
          ))}
        </Routes>
      </Provider>
      {/* <h1 className="text-3xl font-bold underline bg-green-400">
          Hello world!
        </h1> */}
    </BrowserRouter>
  )
}

export default App
