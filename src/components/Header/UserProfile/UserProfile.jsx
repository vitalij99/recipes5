import { useDispatch, useSelector } from 'react-redux';
import {
  AddImage,
  CloseIcon,
  HeaderModalEdit,
  UserIcon,
} from '../HeaderIcon/HeaderIcon';
import {
  ModalOverlay,
  Modal,
  Image,
  ImageContainer,
  CloseIconContainer,
  AddIconContainer,
  Input,
  Label,
  UserIconContainer,
  EditIconContainer,
  ModalSaveButton,
  InputPhoto,
} from './UserProfile.styled';
import { selectAuthUser } from 'redux/auth/authSelector';
import { useState } from 'react';
import { updateNameThunk } from 'redux/auth/authOperation';

const UserProfile = ({ handleToggleModalUserProfile }) => {
  const user = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  const [state, setState] = useState(() => {
    return {
      name: user.name,
      avatar: user.avatarUrl,
    };
  });

  const handleInputChange = (name, value) => {
    setState(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = e => {
    const file = e.target.files[0];
    handleInputChange('avatar', file);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitEditUserProfileForm = async () => {
    dispatch(updateNameThunk(state)).then(res => {
      handleToggleModalUserProfile();
      return;
    });
  };

  return (
    <ModalOverlay
      onClick={e =>
        e.currentTarget === e.target && handleToggleModalUserProfile()
      }
    >
      <Modal>
        <CloseIconContainer onClick={() => handleToggleModalUserProfile()}>
          <CloseIcon />
        </CloseIconContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmitEditUserProfileForm();
          }}
        >
          <ImageContainer>
            {/* <AddIconContainer> */}
            <Image
              src={
                typeof state.avatar === 'string'
                  ? state.avatar
                  : URL.createObjectURL(state.avatar)
              }
              alt="User Avatar"
            />
            <AddIconContainer htmlFor="photo">
              <InputPhoto
                type="file"
                id="photo"
                accept="image/*"
                onChange={handleFileInputChange}
              />
              <AddImage style={{ position: 'absolute' }} />
            </AddIconContainer>
          </ImageContainer>

          <Label htmlFor="name">
            <UserIconContainer>
              <UserIcon />
            </UserIconContainer>
            <Input
              type="text"
              name="name"
              id="name"
              value={state.name}
              onChange={handleChange}
            />
            <EditIconContainer>
              <HeaderModalEdit />
            </EditIconContainer>
          </Label>

          <ModalSaveButton type="submit">Save changes</ModalSaveButton>
        </form>
      </Modal>
    </ModalOverlay>
  );
};

export default UserProfile;
