import { useState } from 'react';
import './App.css';

import ModalCloseIcon from './component/Modal/ModalClose';
import Navbar from './component/Navigation/Navbar';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Toast from './component/Toaster/Toast';
import Modal from './Feature/Modal/CustomModal';
import CustomToaster from './Feature/Toaster/CustomToaster';
import CustomDropdown from './Feature/Dropdown/CustomDropdown';
import CustomSelectDropdown from './Feature/SelectDropdown/CustomSelectDropdown';
import CustomButton from './Feature/Button/CustomButton';
import CustomForm from './Feature/Form/CustomForm';

function App() {

  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      {/* <h1>hello react ts support modal</h1> */}
     

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="toast" element={<CustomToaster />} />
          <Route path="modal" element={<Modal />} />
          <Route path="dropdown" element={<CustomDropdown />} />
          <Route path="selectdropdown" element={<CustomSelectDropdown />} />
          <Route path="button" element={<CustomButton />} />
          <Route path="form" element={<CustomForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
