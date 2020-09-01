import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
  state = {
      notes: [],
      folders: []
  };

  //Boilerpolate Sample:
//     return (
//         <div className="app">
//             // Exact route - will only match /
//             <Route exact path="/" component={HomePage} />
//             // Inexact route - will match /settings, /settings/profile
//             // and /settings/email
//             <Route path="/settings" component={SettingsNavigation} />
//             <Route
//                 exact
//                 path="/settings/profile"
//                 component={ProfileSettings}
//             />
//             // If you want to pass props to the component, use the render prop
//             <Route
//                 exact
//                 path="/settings/email"
//                 render={() => <EmailSettings email="jturner@thinkful.com" />}
//             />
//         </div>
//     );
// }

export default App;
