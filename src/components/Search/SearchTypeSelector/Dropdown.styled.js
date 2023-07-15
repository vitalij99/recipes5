export const customStyles = theme => ({
  container: provided => ({
    ...provided,
    border: 0,

    '&:focus': {
      outline: 'none',
      shadow: 'none',
      boxShadow: 'none',
      borderColor: 'none',
    },

    '&:hover': {
      color: 'white',
      borderColor: 'none',
      shadow: 'none',
      boxShadow: 'none',
    },
  }),

  control: provided => ({
    ...provided,
    width: '146px',
    height: 35,
    minHeight: 35,
    border: 0,
    boxShadow: 'none',
    outline: `${theme.searchPage.searchBy.dropDownMenu.outline} solid 1px`,
    backgroundColor: theme.searchPage.searchBy.dropDownMenu.background1,
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.24px',
    color: ``,

    '&:focus': {
      outline: 'none',
      shadow: 'none',
      boxShadow: 'none',
      borderColor: 'none',
      transition: 'width 0.6s ease',
    },

    '&:hover': {
      borderColor: 'none',
      shadow: 'none',
      boxShadow: 'none',
      transition: 'width 0.6s ease',
    },

    '@media (min-width: 768px)': {
      width: '175px',
      fontSize: '14px',
      letterSpacing: '-0.28px',
      height: 41,
      minHeight: 41,
    },

    '@media (min-width: 1440px)': {
      width: '198px',
      height: 49,
      minHeight: 49,
    },
  }),

  singleValue: provided => ({
    ...provided,
    color: theme.searchPage.searchBy.text2.color,
    opacity: 0.5,

    '@media (min-width: 768px)': {
      fontSize: '14px',
      letterSpacing: '-0.28px',
    },

    '@media (min-width: 1440px)': {},
  }),

  menu: provided => ({
    ...provided,
    marginTop: 0,
    // outline: 'solid red 1px ',
    backgroundColor: theme.searchPage.searchBy.dropDownMenu.background2,
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px',
    borderColor: 'transparent',
    border: 0,
    boxShadow: 'none',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.24px',
    maxHeight: '200px',
    outline: `${theme.searchPage.searchBy.dropDownMenu.outline} solid 1px`,

    '&:focus': {
      backgroundColor: 'white',
      // outline: 'none',
      outline: theme.searchPage.searchBy.dropDownMenu.outline,
      shadow: 'none',
      boxShadow: 'none',
      borderColor: 'none',
    },

    '&:hover': {
      borderColor: 'none',
      shadow: 'none',
      boxShadow: 'none',
      transition: 'max-height 1s ease, opacity 0.3s ease',
    },

    '@media (min-width: 768px)': {
      fontSize: '14px',
      letterSpacing: '-0.28px',
    },

    '@media (min-width: 1440px)': {},
  }),

  option: (provided, state) => ({
    ...provided,
    background: theme.searchPage.searchBy.dropDownMenu.background2,
    color: theme.searchPage.searchBy.dropDownMenu.text2.color,
    borderBottomLeftRadius: state.isLastOption ? '6px' : '0',
    borderBottomRightRadius: state.isLastOption ? '6px' : '0',
    opacity: 0.5,

    '&:hover': {
      color: theme.searchPage.searchBy.dropDownMenu.text2.hover,
      background: theme.searchPage.searchBy.dropDownMenu.background2,
      opacity: 1,
      borderColor: 'none',
      shadow: 'none',
      boxShadow: 'none',
    },

    '&:focus': {
      outline: 'none',
      background: theme.searchPage.searchBy.dropDownMenu.background2,
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  indicatorsContainer: provided => ({
    ...provided,
    '&:hover': {},
    '&:focus': {},
  }),

  indicatorContainer: provided => ({}),

  dropdownIndicator: provided => ({
    ...provided,
    color: theme.searchPage.searchBy.icon,
    opacity: 0.5,
    '&:hover': {
      color: theme.searchPage.searchBy.icon,
      opacity: 1,
    },
    '&:focus': {
      color: theme.searchPage.searchBy.icon,
      opacity: 1,
    },
  }),
});
