import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./store/store"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ToastContainer } from 'react-toastify';
import RoomDetail from './Pages/RoomDetail/Room';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"room/:id",
    element:<RoomDetail/>
  }
]);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgcu9fQmSP8ZKafNzaL0BH1r5jAdKPnjo",
  authDomain: "airbnb-7a3c6.firebaseapp.com",
  projectId: "airbnb-7a3c6",
  storageBucket: "airbnb-7a3c6.appspot.com",
  messagingSenderId: "62297950975",
  appId: "1:62297950975:web:13225e0a550fd633e09aca",
  measurementId: "G-Z2MY89XHZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <GoogleOAuthProvider clientId="923396781162-0q37cb8dfhsaasf61ncmgn0rpc4pi6qg.apps.googleusercontent.com">
    <Provider store={store}>
      <div className='App'>
      <Header/>
      </div>

    <RouterProvider router={router} />
    </Provider>
    </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
