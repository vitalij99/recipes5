import styled from 'styled-components';

export const IconWrapper = styled.div`
  stroke: ${props => props.theme.mainPage.header.user.iconBurger};
  cursor: pointer;
  &:hover {
    stroke: ${props => props.theme.mainPage.menuMobileModal.hover};
  }
`;

export const IconEditButtonWrapper = styled.div`
  stroke: ${props =>
    props.theme.mainPage.header.userMenuEditProfile.button.icon};
  cursor: pointer;
`;
export const IconEditWrapper = styled.div`
  stroke: ${props => props.theme.mainPage.header.userMenuEditProfile.icon};
  cursor: pointer;
  &:hover {
    stroke: ${props => props.theme.mainPage.header.userMenuEditProfile.hover};
  }
`;
export const HeaderLogo = () => {
  return (
    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="12" fill="#8BAA36" />
      <path
        d="M10 10.1025V15.5561V15.6661V15.5561C10 17.1132 10.6794 18.4919 11.7328 19.3841C12.2479 19.8205 12.5882 20.4096 12.5882 21.0635V30.1667C12.5882 31.1787 13.4579 32.0001 14.5294 32.0001C15.6009 32.0001 16.4706 31.1787 16.4706 30.1667V21.0635C16.4706 20.4096 16.8109 19.8205 17.326 19.3841C18.3794 18.4919 19.0588 17.1132 19.0588 15.5561V10.1025V15.5561"
        stroke="#FAFAFA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5293 16.1112V10"
        stroke="#FAFAFA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.9999 11.2854C31.9999 10.6107 31.4201 10.0632 30.7058 10.0632H29.4116C27.2673 10.0632 25.5293 11.7046 25.5293 13.7299V21.0633C25.5293 22.6571 26.6125 24.0003 28.1175 24.5051V30.1665C28.1175 31.1785 28.9872 31.9999 30.0587 31.9999C31.1302 31.9999 31.9999 31.1785 31.9999 30.1665V24.73V11.2854Z"
        stroke="#FAFAFA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MenuIcon = () => {
  return (
    <IconWrapper>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 14H24.5M3.5 7H24.5M3.5 21H17.5"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </IconWrapper>
  );
};

export const CloseIcon = () => {
  return (
    <IconWrapper>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6673 9.33334L9.33398 22.6667M9.33398 9.33334L22.6673 22.6667"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </IconWrapper>
  );
};

export const SearchIcon = () => {
  return (
    <IconWrapper>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.0004 21L16.6504 16.65"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </IconWrapper>
  );
};

export const SwitchBody = () => {
  return (
    <svg
      width="61"
      height="27"
      viewBox="0 0 61 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_19801_40)">
        <rect width="61" height="27" rx="13.5" fill="#EFEFEF" />
      </g>
      <defs>
        <filter
          id="filter0_i_19801_40"
          x="0"
          y="0"
          width="61"
          height="33"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_19801_40"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_19801_40"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const Switch = () => {
  return (
    <svg
      width="34"
      height="33"
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Switch" filter="url(#filter0_d_19929_43)">
        <ellipse
          id="Ellipse 1"
          cx="14.7248"
          cy="15.5"
          rx="10.675"
          ry="10.5"
          fill="url(#paint0_linear_19929_43)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_19929_43"
          x="0.0498047"
          y="0"
          width="33.3496"
          height="33"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="1" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19929_43"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19929_43"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_19929_43"
          x1="14.7248"
          y1="5"
          x2="14.7248"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#E8EAEA" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const HeaderModalEdit = () => {
  return (
    <IconEditWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
      >
        <path
          d="M1.62669 11.5323C1.67264 11.1188 1.69561 10.9121 1.75816 10.7188C1.81367 10.5474 1.89208 10.3842 1.99129 10.2338C2.10311 10.0642 2.2502 9.91713 2.54438 9.62295L9.91733 2.25001C10.5617 1.60568 11.6063 1.60568 12.2507 2.25001V2.25001C12.895 2.89434 12.895 3.93901 12.2507 4.58334L4.87771 11.9563C4.58353 12.2505 4.43644 12.3976 4.26687 12.5094C4.11643 12.6086 3.95327 12.687 3.78183 12.7425C3.58859 12.8051 3.38184 12.828 2.96835 12.874L1.45898 13.0417L1.62669 11.5323Z"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </IconEditWrapper>
  );
};

export const HeaderModalEditButton = () => {
  return (
    <IconEditButtonWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 16"
        fill="none"
      >
        <path
          d="M2.75 9.5H12.75"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 4.25L14.25 9.5L9 14.75"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </IconEditButtonWrapper>
  );
};
