import {
  HeaderModalEditButton,
  HeaderModalEdit,
} from '../HeaderIcon/HeaderIcon';

import {
  Modal,
  EditProfileContainer,
  EditProfileText,
  EditProfileIcon,
  EditProfileButton,
  ModalOverlay,
  EditProfileButtonText,
} from './ModalHeaderEdit.styled';

const ModalHeaderEdit = ({ setToggleModalEdit, handleToggleModalLogOut }) => {
  return (
    <ModalOverlay
      onClick={e => e.currentTarget === e.target && setToggleModalEdit(false)}
    >
      <Modal>
        <EditProfileContainer>
          <EditProfileText>Edit profile</EditProfileText>
          <EditProfileIcon>
            <HeaderModalEdit />
          </EditProfileIcon>
        </EditProfileContainer>
        <EditProfileButton type="button" onClick={handleToggleModalLogOut}>
          <EditProfileButtonText>Log out </EditProfileButtonText>
          <HeaderModalEditButton />
        </EditProfileButton>
      </Modal>
    </ModalOverlay>
  );
};

export default ModalHeaderEdit;
