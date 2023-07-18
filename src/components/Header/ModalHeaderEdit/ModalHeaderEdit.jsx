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

const ModalHeaderEdit = ({
  handleToggleModalUserProfile,
  setToggleModalEdit,
  handleToggleModalLogOut,
  toggleEditUser,
}) => {
  return (
    <>
      <ModalOverlay
        onClick={e => {
          return e.currentTarget === e.target && setToggleModalEdit(false);
        }}
      >
        <Modal>
          <EditProfileContainer
            onClick={() => handleToggleModalUserProfile(!toggleEditUser)}
          >
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
    </>
  );
};

export default ModalHeaderEdit;
