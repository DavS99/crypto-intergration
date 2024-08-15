import Button from '../button';
import './index.css';

const Modal = ({onClose, connectWallet, connectMetamask}) => {
    return (
    <div className="modal_container">
      <div className="header">
        <span onClick={onClose}>
            &#x2715;
        </span>
      </div>

      <div className="body">
        <Button value="Wallet Connect" onClick={connectWallet}/>
        <Button value="Metamask" onClick={connectMetamask}/>
      </div>
    </div>
    )
};


export default Modal;