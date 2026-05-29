import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';           // Imports global CSS styles which apply to the whole application.
import App from './App';      // Imports the App component from App.js.

const root = ReactDOM.createRoot(document.getElementById('root'));    // ReactDOM.createRoot(...)  it Create a React root container.
root.render( <App />);

// App is react component

//     index.js is usually the entry point of a React app. 
//   It is the first JavaScript file that runs and tells React which component to render in the browser.



//         Browser opens app
//                ↓
//         index.html loads
//                ↓
//          find root div
//                ↓
//         index.js loads
//                ↓
//          load React
//                ↓
//          load ReactDOM
//                ↓
//         load index.css
//                ↓
//           import App
//                ↓
//          go to App.js
//                ↓
//          load App.css
//                ↓
//          define App
//                ↓
//          export App
//                ↓
//        back to index.js
//                ↓
//        find root div
//                ↓
//        create React root
//                ↓
//           render App
//                ↓
//          App executes
//                ↓
//          returns JSX
//                ↓
//         React converts JSX
//                ↓
//           updates DOM
//                 ↓
//             apply CSS
//                 ↓
//             UI visible