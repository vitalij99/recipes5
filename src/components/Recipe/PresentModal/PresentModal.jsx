import { useEffect, useState } from 'react';
import {
  AkcentTitle,
  BtnIcon,
  BtnModal,
  ContainerTitle,
  ModalTitle,
  OverlayModal,
  WrapperModal,
} from './PresentModal.styled';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function PresentModal({ onClose, event }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  let titleDescr = null;

  useEffect(() => {
    setIsOpenModal(onClose);
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        setIsOpenModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  switch (event) {
    case 'firstShopping':
      titleDescr = {
        text: (
          <ModalTitle>
            <AkcentTitle>Wow!</AkcentTitle> You have created your first shopping
            list!
          </ModalTitle>
        ),
      };
      break;
    case 'tenRecipesOnFavorite':
      titleDescr = {
        text: (
          <ModalTitle>
            <AkcentTitle>Wow!</AkcentTitle> You have added 10 recipes to your
            favorites!
          </ModalTitle>
        ),
      };
      break;
    case 'firstRecipeOnFavorite':
      titleDescr = {
        text: (
          <ModalTitle>
            <AkcentTitle>Wow!</AkcentTitle> You have added the first recipe to
            your favorites!
          </ModalTitle>
        ),
      };
      break;
    case 'oneHundredDay':
      titleDescr = {
        text: (
          <ModalTitle>
            <AkcentTitle>Wow!</AkcentTitle> You have been using the application
            for 100 days!
          </ModalTitle>
        ),
      };
      break;
    default:
      titleDescr = {
        text: 'Event not find',
      };
  }

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
          <WrapperModal type={event}>
            <ContainerTitle>
              <div>{titleDescr.text}</div>
              <BtnModal type="button" onClick={handleCoseModal}>
                <BtnIcon />
              </BtnModal>
            </ContainerTitle>
          </WrapperModal>
        </OverlayModal>,
        modalRoot
      )}
    </>
  );
}

export default PresentModal;
