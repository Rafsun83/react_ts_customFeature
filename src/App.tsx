import { useState } from 'react';
import './App.css';
import Modal from './component/Modal';


function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const openModalhandaler = () => {
    setIsModalOpen((prev) => !prev)
  }
  return (
    <div className="App">
      <h1>hello react ts support modal</h1>
      <button onClick={openModalhandaler}>modal</button>
      <Modal isOpen={isModalOpen} animation={'fade'}>
        <Modal.Header>
          <h1>hello</h1>
        </Modal.Header>
      </Modal>
     
    </div>
  );
}

export default App;
