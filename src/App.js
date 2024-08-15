import { useState } from 'react';
import WalletConnector from 'fasttoken-wallet-connector';
import config from './config';
import Button from './components/button';
import Modal from './components/modal';
import './App.css';

function App() {
const [walletConnector] = useState(new WalletConnector(config));
const [isModalOpened, setIsModalOpened] = useState(false);

  const connectWallet = async () => {
    try {
      const provider = await walletConnector.connectWithWalletConnect({
        qrModalOptions: {
          themeVariables: {
            '--wcm-z-index': 10000 // this is what I told you about css vars
          }
        }

    });
    
      console.log(provider);
    }catch(e) {
        alert('Error');
      console.log(e)
    }
    
  };

  const connectMetamask = async () => {
    try {
      const provider = await walletConnector.connectWithMetamask();
      console.log(provider, 'connectMetamask');
    }catch(e) {
      alert('Error');
      console.log(e)
    }
  };

  return (
    
    <div className="App">

      <Button 
        value="Connect Wallet" 
        onClick={() => setIsModalOpened(true)}

      />
      {
        isModalOpened && (
          <Modal 
            connectWallet={connectWallet}
            connectMetamask={connectMetamask}
            onClose={() => setIsModalOpened(false)}
          />
        )
      }
    </div>
  );
}

export default App;

// npm config set registry https://registry.npmjs.org
// npm config set strict-ssl false
