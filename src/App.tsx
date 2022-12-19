import { useState } from 'react';
import './App.css';
import Modal from './component/Modal';
import ModalCloseIcon from './component/Modal/ModalClose';


function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const openModalhandaler = () => {
    setIsModalOpen((prev) => !prev)
  }
  return (
    <div className="App">
      <h1>hello react ts support modal</h1>
      <button onClick={openModalhandaler} className="border border-collapse">modal</button>
      <Modal isOpen={isModalOpen} disableOutsideClick animation={'fade'}>
        <Modal.Header>
          <h1>hello</h1>
          <ModalCloseIcon onClose={openModalhandaler}/>
        </Modal.Header>
        <Modal.Body>
          <h1>hello modal body</h1>
        </Modal.Body>
      </Modal>
     
    </div>
  );
}

export default App;
