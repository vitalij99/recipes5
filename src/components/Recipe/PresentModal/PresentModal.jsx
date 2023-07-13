import { useEffect, useState } from 'react';
import {
  BtnIcon,
  BtnModal,
  OverlayModal,
  TitleModal,
  WrapperModal,
} from './PresentModal.styled';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function PresentModal({ onClose }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    setIsOpenModal(onClose);
  }, [onClose]);

  const handleCoseModal = () => {
    setIsOpenModal(false);
  };

  if (!isOpenModal) {
    return null;
  }
  return (
    <>
      {createPortal(
        <OverlayModal>
          <WrapperModal>
            <TitleModal />
            <BtnModal type="button" onClick={handleCoseModal}>
              <BtnIcon />
            </BtnModal>
          </WrapperModal>
        </OverlayModal>,
        modalRoot
      )}
    </>
  );
}

export default PresentModal;
