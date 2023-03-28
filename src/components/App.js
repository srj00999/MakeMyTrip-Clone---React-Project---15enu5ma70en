import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './template/Footer';
import Flights from './template/Flight/Flights';
import Hotels from './template/Hotel/Hotels';
import Trains from './template/Train/Trains';
import Login from './template/LoginRegister/Login';
import Home from './template/Home';
import FlightData from './template/Flight/FlightData';
import LoginRegister from './template/LoginRegister/LoginRegister';
import LoginData from './template/LoginRegister/LoginData';
import Register from './template/LoginRegister/Register';
import NotFound from './template/NotFound';
import DataApp from './DataApp';


const App = () => {

  return (
    <div id="main">
      <DataApp>
        <Container fluid>
          <Home />


          <Routes>
            <Route path='/flights' element={<Flights />}>
              <Route path='flightData' element={<FlightData />} />
            </Route>
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/trains' element={<Trains />} />
            <Route path='/LoginData' element={<LoginData />} />
            <Route path='/LoginRegister' element={<LoginRegister />} />
            <Route path='/login' element={<Login />}></Route>
            <Route path='/' element={<Login />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/register' element={<Register />} />
            <Route path='/flightData' element={<FlightData />} />

          </Routes>

          <Footer />
        </Container>
      </DataApp>

    </div>
  )
}


export default App;
