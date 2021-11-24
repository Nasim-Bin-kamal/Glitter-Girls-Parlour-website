import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import AddService from './pages/AddService/AddService';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardHome from './pages/DashboardHome/DashboardHome';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ManageServices from './pages/ManageServices/ManageServices';
import NotFound from './pages/NotFound/NotFound';
import OrderList from './pages/OrderList/OrderList';
import Register from './pages/Register/Register';
import Services from './pages/Services/Services';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/orderlist" element={<OrderList />} />
            <Route path="/dashboard/addService" element={<AddService />} />
            <Route path="/dashboard/manageServices" element={<ManageServices />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
