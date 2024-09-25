import {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import LoginRoute from './components/LoginRoute';
import TaskDashborad from './components/TaskDashborad'; // Fixed the spelling here

import './App.css';

// Replace your code here
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/" element={<TaskDashborad />} />
      </Routes>
    );
  }
}

export default App;
