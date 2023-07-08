//NOTE - use case
// const MenuModal = styled.div`
//   background-color: ${props =>
//     props.theme.mobile.mainPage.menuModal.background};
//   /* Other styles for the menu modal */
// `;

export const lightTheme = {
  mobile: {
    mainPage: {
      background: '#FAFAFA',
      menuModal: {
        background: '#EBF3D4',
        text: '#22252A',
        icon: '#22252A',
      },
      header: {
        logo: {
          background: '#8BAA36',
          icon: '#FAFAFA',
        },
        user: {
          text: '#22252A',
          iconBurger: '#22252A',
        },
        userMenu: {
          border: '#23262A',
          text: '#22252A',
          icon: '#23262A',
          button: {
            fill: '#8BAA36',
            text: '#FAFAFA',
            icon: '#FAFAFA',
          },
        },
      },
      hero: {
        titleText1: '#8BAA36',
        titleText2: '#22252A',
        text: '#22252A',
        popup: {
          background: '#FAFAFA',
          text1: '#8BAA36',
          text2: '#3E4462',
          icon: '#3E4462',
        },
        search: {
          outline: '#F0F0F0',
          text1: '#BDBDBD',
          text2: '#3E4462',
          button: {
            fill: '#22252A',
            text: '#FAFAFA',
          },
        },
      },
      list: {
        title: '#001833',
        recipePlate: {
          background: '#FFFFFF',
          text: '#3E4462',
        },
        buttonSeeAll: {
          fill: '#8AA936',
          text: '#FAFAFA',
        },
        buttonOther: {
          outline: '#8BAA36',
          fill: '#FAFAFA',
          text: '#22252A',
        },
      },
      footer: {
        background: '#22252A',
        title: '#FAFAFA',
        text: '#FAFAFA',
        logo: {
          background: '#EBF3D4',
          icon: '#8BAA36',
        },
        email: {
          text: '#FAFAFA',
          icon: '#FAFAFA',
          outline: '#BDBDBD',
        },
        button: {
          fill: '#8BAA36',
          text: '#FAFAFA',
        },
        iconsList: {
          color: '#8BAA36',
        },
        bottomText: {
          text: '#22252A',
        },
      },
    },
    categoriesPage: {
      background: '#FAFAFA',
      title: {
        text: '#001833',
      },
      menu: {
        selected: '#8BAA36',
        notSelected: '#E0E0E0',
      },
      list: {
        title: '#001833',
        recipePlate: {
          background: '#FFFFFF',
          text: '#3E4462',
        },
        buttonSeeAll: {
          fill: '#8AA936',
          text: '#FAFAFA',
        },
        buttonOther: {
          outline: '#8BAA36',
          fill: '#FAFAFA',
          text: '#22252A',
        },
      },
    },
    addRecipePage: {
      background: '#FAFAFA',
      title: {
        text: '#001833',
      },
      listOfItems: {
        text1: '#7E7E7E',
        text2: '#000000',
        icon: '#8BAA36',
        underline: '#E0E0E0',
      },
      listOfIngredients: {
        text1: '#7E7E7E',
        text2: '#000000',
        icon1: '#000000',
        icon2: '#8BAA36',
        selectionBackground: '#D9D9D9',
        dropDownMenu: {
          background: '#FFFFFF',
          text1: '#000000',
          text2: '#8BAA36',
        },
        button: {
          fill: '#FAFAFA',
          text: '#333333',
          outline: '#7E7E7E',
          icon1: '#8BAA36',
          icon2: '#7E7E7E',
        },
      },
      recipePreparation: {
        background: '#D9D9D9',
        text1: '#7E7E7E',
      },
    },
  },
};
