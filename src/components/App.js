import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './template/Footer';
import Flights from './template/Flight/Flights';
import Hotels from './template/Hotel/Hotels';
import Trains from './template/Train/Trains';
import Home from './template/Home';
import FlightData from './template/Flight/FlightData';
import NotFound from './template/NotFound';
import DataApp from './DataApp';
import HotelsData from './template/Hotel/HotelsData';
import TrainData from './template/Train/TrainData';
import Login from './template/LoginRegister/Login';
import Register from './template/LoginRegister/Register';
import CheckOut from './template/CheckOut';




const App = () => {

  return (
    <div id="main">
      <DataApp>
        <Container fluid style={{ minHeight: "100vh", position: "relative" }}>
          <Home />
          
          <div style={{ paddingBottom: "40px" }}>
            <Routes style={{ paddingBottom: "40px" }}>
              <Route path='/flights' element={<Flights />} />>
              <Route path='flightData' element={<FlightData />} />
              <Route path='/hotels' element={<Hotels />} />
              <Route path='/hotelsData' element={<HotelsData />} />
              <Route path='/trains' element={<Trains />} />
              <Route path='/traindata' element={<TrainData />} />
              <Route path='/*' element={<NotFound />} />
              <Route path='/flightData' element={<FlightData />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/checkout' element={<CheckOut />} />
              <Route path='/' element={<Flights />} />

            </Routes>
          </div>

          <Footer />
        </Container>
      </DataApp>

    </div>
  )
}


export default App;
