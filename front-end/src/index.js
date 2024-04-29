import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Login from './routes/Login';
// import Todo from './routes/Todo';
// import About from './routes/About';
// import ErrorRoute from './routes/ErrorRoute';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorRoute />,
//     children: [
//       {
//         path: '/',
//         element: <Login />
//       },
//       {
//         path: '/todo',
//         element: <Todo />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//     ]
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
