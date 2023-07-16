//NOTE - use case
// const MenuModal = styled.div`
//   background-color: ${props =>
//     props.theme.mainPage.menuModal.background};
//   /* Other styles for the menu modal */
// `;

export const lightTheme = {
  mainPageTitle: {
    background: '#FAFAFA',
    particle: '#22252A',
  },
  mainPage: {
    background: '#FAFAFA',
    menuMobileModal: {
      background: '#EBF3D4',
      text: '#22252A',
      icon: '#22252A',
      hover: '#8BAA36',
    },
    header: {
      logo: {
        background: '#8BAA36',
        icon: '#FAFAFA',
      },
      nav: {
        text: '#23262A',
        hover: '#8BAA36',
      },
      searchIcon: {
        fill: '#22252A',
        hover: '#8BAA36',
      },
      user: {
        text: '#22252A',
        textMainPage: {
          desktop: '#22252A',
        },
        textRecipePage: {
          mobile: '#22252A',
          tablet: '#22252A',
          desktop: '#22252A',
        },

        iconBurger: '#22252A',
        iconBurgerMainPage: {
          tablet: '#22252A',
        },
        iconBurgerRecipePage: {
          mobile: '#22252A',
          tablet: '#22252A',
        },
        hover: '#8BAA36',
      },
      userMenuEditProfile: {
        outline: '#8BAA36',
        text: '#22252A',
        icon: '#23262A',
        hover: '#8BAA36',
        button: {
          fill: '#8BAA36',
          text: '#FAFAFA',
          icon: '#FAFAFA',
          hoverFill: '#22252A',
        },
      },
      themeToggler: {
        background: '#EFEFEF',
        switch: '#EFEFEF',
      },
    },
    hero: {
      titleText1: '#8BAA36',
      titleText2: '#22252A',
      text: '#22252A',
      popupSeeRecipes: {
        background: '#FAFAFA',
        text1: '#8BAA36',
        text2: '#3E4462',
        icon: '#3E4462',
        hover: '#8BAA36',
      },
      search: {
        outline: '#F0F0F0',
        text1: '#BDBDBD',
        text2: '#3E4462',
        button: {
          fill: '#22252A',
          text: '#FAFAFA',
          hoverFill: '#8BAA36',
        },
      },
    },
    list: {
      title: '#001833',
      hoverTitle: '#8BAA36',
      recipePlate: {
        background: '#FFFFFF',
        text: '#3E4462',
      },
      buttonSeeAll: {
        fill: '#8AA936',
        text: '#FAFAFA',
        hoverFill: '#22252A',
      },
      buttonOther: {
        outline: '#8BAA36',
        fill: '#FAFAFA',
        text: '#22252A',
        hoverFill: '#8BAA36',
      },
    },
    footer: {
      background: '#22252A',
      backgroundBottom: '#FAFAFA',
      title: '#FAFAFA',
      text: '#FAFAFA',
      hoverText: '#8BAA36',
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
        hoverFill: '#D9D9D9',
      },
      iconsList: {
        color: '#8BAA36',
        hoverColor: '#D9D9D9',
      },
      bottomText: {
        text: '#22252A',
        hoverText: '#8BAA36',
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
      recipePlate: {
        background: '#FFFFFF',
        text: '#3E4462',
      },
    },
  },
  addRecipePage: {
    background: '#FAFAFA',
    title: '#001833',
    listOfItems: {
      text1: '#7E7E7E',
      text2: '#000000',
      icon: '#8BAA36',
      underline: '#E0E0E0',
      opacity: '0.5',
    },
    listOfIngredients: {
      text1: '#7E7E7E',
      text2: '#000000',
      icon1: '#000000',
      hoverIcon1: '#8BAA36',
      icon2: '#8BAA36',
      counter: 'rgba(51, 51, 51, 0.30)',
      hoverIcon2: 'rgba(250, 250, 250, 0.30)',
      selectionBackground: '#f5f5f5',
      dropDownMenu: {
        background: '#FFF',
        text1: '#000',
        text2: '#8BAA36',
      },
      button: {
        fill: '#FAFAFA',
        text: '#333',
        outline: '#7E7E7E',
        icon: '#8BAA36',
        hoverIcon: '#7E7E7E',
      },
    },
    recipePreparation: {
      background: '#D9D9D9',
      outline: 'rgba(250, 250, 250, 0.20);',
      text1: '#7E7E7E',
      text2: '#000000',
      button: {
        fill: '#22252A',
        text: '#FAFAFA',
        hoverFill: '#8BAA36',
      },
    },
    popularRecipe: {
      title: '#3E4462',
      hoverTitle: '#8BAA36',
      underline: '#707070',
    },
    followUs: {
      title: '#3E4462',
      icon: '#8BAA36',
      hoverIcon: '#1E1F28',
    },
  },
  favoritePage: {
    background: '#FAFAFA',
    title: '#001833',
    list: {
      background: '#FFFFFF',
      title: '#3E4462',
      text: '#23262A',
    },
    button: {
      fill: '#22252A',
      text: '#FAFAFA',
      hoverFill: '#8BAA36',
    },
    icon: {
      background: '#EBF3D4',
      color: '#22252A',
    },
    pagination: {
      background: '#FAFAFA',
      arrows: '#A9A9A9BA',
      numbers: '#656565',
      focus: {
        circle: '#EBF3D4',
        numbers: '#22252A',
      },
    },
  },
  recipePage: {
    hero: {
      title: '#8BAA36',
      text: '#22252A',
      button: {
        outline: '#8BAA36',
        text: '#22252A',
        hoverFill: '#8BAA36',
        hoverText: '#FAFAFA',
      },
    },
    ingredients: {
      background: '#FAFAFA',
      titles: {
        background: '#8BAA36',
        text: '#FAFAFA',
      },
      list: {
        background: '#EBF3D4',
        text: '#3E4462',
        number: {
          background: '#8BAA36',
          text: '#FAFAFA',
        },
        checkbox: {
          outline: '#7E7E7E80',
          icon: '#8BAA36',
        },
      },
    },
    recipePreparation: {
      title: '#3E4462',
      list: {
        text: 'rgba(0, 0, 0, 0.80)',
        circle: '#8BAA36',
        number: '#FAFAFA',
      },
    },
  },
  myRecipesPage: {
    background: '#FAFAFA',
    title: '#001833',
    list: {
      background: '#FFFFFF',
      title: '#3E4462',
      text: '#23262A',
    },
    button: {
      fill: '#22252A',
      text: '#FAFAFA',
      hoverFill: '#8BAA36',
    },
    icon: {
      background: '#EBF3D4',
      color: '#22252A',
    },
    pagination: {
      background: '#FAFAFA',
      arrows: '#A9A9A9BA',
      numbers: '#656565',
      focus: {
        circle: '#EBF3D4',
        numbers: '#22252A',
      },
    },
  },
  searchPage: {
    background: '#FAFAFA',
    title: '#001833',
    text: {
      color: '#000000',
      opacity: '0.5',
    },
    searchBar: {
      background: '#FFFFFF',
      outline: '#23262A33',
      hoverOutline: '#8BAA36',
      text: '#BDBDBD',
      hoverText: '#23262A',
      button: {
        fill: '#8BAA36',
        text: '#FAFAFA',
        hoverFill: '#22252A',
      },
    },
    searchBy: {
      text1: '#001833',
      text2: {
        color: '#000000',
        opacity: '0.5',
      },
      dropDownMenu: {
        background1: '#D9D9D9',
        background2: '#FFFFFF',
        outline: '#D9D9D9',
        text1: {
          color: '#000000',
          opacity: '0.5',
        },
        text2: {
          color: '#000000',
          hover: 'rgb(139, 170, 54)',
        },
      },
      icon: '#8BAA36',
    },
    list: {
      background: '#FAFAFA',
      recipePlate: {
        background: '#FFFFFF',
        text: '#3E4462',
      },
    },
  },
  shoppingListPage: {
    background: '#FAFAFA',
    title: '#001833',
    product: {
      titles: {
        background: '#8BAA36',
        text: '#FAFAFA',
      },
      list: {
        pictureBackground: '#EBF3D4',
        text: '#3E4462',
        underline: '#E0E0E0',
      },
      number: {
        background: '#8BAA36',
        text: '#FAFAFA',
      },
      icon: '#333333',
      hoverIcon: '#8BAA36',
    },
  },
  errorPage: {
    background: '#FAFAFA',
    title: '#000000',
    text: {
      color: '#000000',
      opacity: '0.5',
    },
  },
  loader: {
    background: '#FAFAFA',
    icon: '#8BAA36',
  },
  userProfile: {
    background: '#FAFAFA',
    closeIcon: '#333333',
    userPhoto: {
      circleBackground: '#D9D9D9',
      icon: '#C4C4C4',
      plusBackground: '#8BAA36',
      plusIcon: '#FAFAFA',
    },
    input: {
      outline: '#23262A',
      text: '#23262A',
      icon: '#23262A',
    },
    button: {
      background: '#8BAA36',
      text: '#FAFAFA',
      hoverBackground: '#1E1F28',
    },
  },
  logout: {
    background: '#FAFAFA',
    closeIcon: '#333333',
    text: '#23262A',
    button1: {
      background: '#8BAA36',
      text: '#FAFAFA',
      hoverBackground: '#22252A',
    },
    button2: {
      background: '#D9D9D9',
      text: '#23262A',
      hoverBorder: '#23262A',
      hoverBackground: '#FFFFFF',
    },
  },
};

export const darkTheme = {
  mainPageTitle: {
    background: '#1E1F28',
    particle: '#FAFAFA',
  },
  mainPage: {
    background: '#1E1F28',
    menuMobileModal: {
      background: '#1E1F28',
      text: '#FAFAFA',
      icon: '#FAFAFA',
      hover: '#8BAA36',
    },
    header: {
      logo: {
        background: '#8BAA36',
        icon: '#FAFAFA',
      },
      nav: {
        text: '#FAFAFA',
        hover: '#8BAA36',
      },
      searchIcon: {
        fill: '#FAFAFA',
        hover: '#8BAA36',
      },
      user: {
        text: '#FAFAFA',
        textMainPage: {
          desktop: '#22252A',
        },
        textRecipePage: {
          mobile: '#22252A',
          tablet: '#22252A',
          desktop: '#22252A',
        },

        iconBurger: '#FAFAFA',
        iconBurgerMainPage: {
          tablet: '#22252A',
        },
        iconBurgerRecipePage: {
          mobile: '#22252A',
          tablet: '#22252A',
        },
        hover: '#8BAA36',
      },
      userMenuEditProfile: {
        outline: '#8BAA36',
        text: '#FAFAFA',
        icon: '#FAFAFA',
        hover: '#8BAA36',
        button: {
          fill: '#8BAA36',
          text: '#FAFAFA',
          icon: '#FAFAFA',
          hoverFill: '#393c42',
        },
      },
      themeToggler: {
        background: '#8BAA36',
        switch: '#EFEFEF',
      },
    },
    hero: {
      titleText1: '#8BAA36',
      titleText2: '#FAFAFA',
      text: '#FAFAFA',
      popupSeeRecipes: {
        background: '#2A2C36',
        text1: '#8BAA36',
        text2: '#FAFAFA',
        icon: '#FAFAFA',
        hover: '#8BAA36',
      },
      search: {
        outline: '#F0F0F0',
        text1: '#BDBDBD',
        text2: '#3E4462',
        button: {
          fill: '#22252A',
          text: '#FAFAFA',
          hoverFill: '#8BAA36',
        },
      },
    },
    list: {
      title: '#FAFAFA',
      hoverTitle: '#8BAA36',
      recipePlate: {
        background: '#2A2C36',
        text: '#FAFAFA',
      },
      buttonSeeAll: {
        fill: '#8AA936',
        text: '#FAFAFA',
        hoverFill: '#393c42',
      },
      buttonOther: {
        outline: '#8BAA36',
        fill: '#1E1F28',
        text: '#FAFAFA',
        hoverFill: '#393c42',
      },
    },
    footer: {
      background: '#8BAA36',
      backgroundBottom: '#1E1F28',
      title: '#FAFAFA',
      text: '#FAFAFA',
      hoverText: '#393c42',
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
        fill: '#1E1F28',
        text: '#FAFAFA',
        hoverFill: '#393c42',
      },
      iconsList: {
        color: '#FAFAFA',
        hoverColor: '#393c42',
      },
      bottomText: {
        text: '#FAFAFA',
        hoverText: '#8BAA36',
      },
    },
  },
  categoriesPage: {
    background: '#1E1F28',
    title: {
      text: '#FAFAFA',
    },
    menu: {
      selected: '#8BAA36',
      notSelected: 'rgba(250, 250, 250, 0.60)',
    },
    list: {
      recipePlate: {
        background: '#2A2C36',
        text: '#FAFAFA',
      },
    },
  },
  addRecipePage: {
    background: '#1E1F28',
    title: '#FAFAFA',
    listOfItems: {
      text1: '#FAFAFA',
      text2: '#FAFAFA',
      icon: '#8BAA36',
      underline: 'rgba(250, 250, 250, 0.30);',
    },
    listOfIngredients: {
      text1: '#FAFAFA',
      text2: '#FAFAFA',
      icon1: '#FAFAFA',
      hoverIcon1: '#8BAA36',
      icon2: '#8BAA36',
      counter: '#FAFAFA',
      hoverIcon2: 'rgba(250, 250, 250, 0.30)',
      selectionBackground: '#1E1F28',
      dropDownMenu: {
        background: '#8BAA36',
        text1: 'rgba(250, 250, 250, 0.30)',
        text2: '#FAFAFA',
      },
      button: {
        fill: '#1E1F28',
        text: '#FAFAFA',
        outline: '#FAFAFA',
        icon: '#FAFAFA',
        hoverIcon: '#8BAA36',
      },
    },
    recipePreparation: {
      background: '#1E1F28',
      outline: 'rgba(250, 250, 250, 0.20);',
      text1: '#7E7E7E',
      text2: '#FAFAFA',
      button: {
        fill: '#8BAA36',
        text: '#FAFAFA',
        hoverFill: 'rgba(250, 250, 250, 0.20)',
      },
    },
    popularRecipe: {
      title: '#FAFAFA',
      hoverTitle: '#8BAA36',
      text: '#7E7E7E',
      underline: '#707070',
    },
    followUs: {
      title: '#FAFAFA',
      icon: '#FAFAFA',
      hoverIcon: '#8BAA36',
    },
  },
  favoritePage: {
    background: '#1E1F28',
    title: '#FAFAFA',
    list: {
      background: '#2A2C36',
      title: '#FAFAFA',
      text: 'rgba(250, 250, 250, 0.60);',
    },
    button: {
      fill: '#8BAA36',
      text: '#FAFAFA',
      hoverFill: '#393c42',
    },
    icon: {
      background: '#1E1F28',
      color: '#FAFAFA',
    },
    pagination: {
      background: '#2A2C36',
      arrows: 'rgba(250, 250, 250, 0.60);',
      numbers: 'rgba(250, 250, 250, 0.60);',
      focus: {
        circle: '#8BAA36',
        numbers: '#FAFAFA',
      },
    },
  },
  recipePage: {
    hero: {
      title: '#8BAA36',
      text: '#22252A',
      button: {
        outline: '#8BAA36',
        text: '#22252A',
        hoverFill: '#8BAA36',
        hoverText: '#FAFAFA',
      },
    },
    ingredients: {
      background: '#1E1F28',
      titles: {
        background: '#8BAA36',
        text: '#FAFAFA',
      },
      list: {
        background: '#2A2C36',
        text: '#FAFAFA',
        number: {
          background: '#8BAA36',
          text: '#FAFAFA',
        },
        checkbox: {
          outline: '#7E7E7E80',
          icon: '#8BAA36',
        },
      },
    },
    recipePreparation: {
      title: '#3E4462',
      list: {
        text: 'rgba(0, 0, 0, 0.80)',
        circle: '#8BAA36',
        number: '#FAFAFA',
      },
    },
  },
  myRecipesPage: {
    background: '#1E1F28',
    title: '#FAFAFA',
    list: {
      background: '#2A2C36',
      title: '#FAFAFA',
      text: 'rgba(250, 250, 250, 0.60)',
    },
    button: {
      fill: '#8BAA36',
      text: '#FAFAFA',
      hoverFill: '#393c42',
    },
    icon: {
      background: '#1E1F28',
      color: '#FAFAFA',
    },
    pagination: {
      background: '#2A2C36',
      arrows: 'rgba(255, 255, 255, 0.60)',
      numbers: 'rgba(255, 255, 255, 0.60)',
      focus: {
        circle: '#8BAA36',
        numbers: '#FAFAFA',
      },
    },
  },
  searchPage: {
    background: '#1E1F28',
    title: '#FAFAFA',
    text: {
      color: '#000000',
      opacity: '0.5',
    },
    searchBar: {
      background: '#1E1F28',
      outline: '#FAFAFA80',
      hoverOutline: '#FAFAFA80',
      text: 'rgba(250, 250, 250, 0.50)',
      hoverText: '#FAFAFA',
      button: {
        fill: '#8BAA36',
        text: '#FAFAFA',
        hoverFill: '#393c42',
      },
    },
    searchBy: {
      text1: '#FAFAFA',
      text2: {
        color: '#FAFAFA',
        opacity: '0.5',
      },
      dropDownMenu: {
        background1: '#1E1F28',
        background2: '#8BAA36',
        outline: '#8BAA36',
        text1: {
          color: '#FAFAFA',
          opacity: '0.5',
        },
        text2: {
          color: '#FAFAFA',
          hover: '#FAFAFA',
        },
      },
      icon: '#8BAA36',
    },
    list: {
      background: '#1E1F28',
      recipePlate: {
        background: '#2A2C36',
        text: '#FAFAFA',
      },
    },
  },
  shoppingListPage: {
    background: '#1E1F28',
    title: '#FAFAFA',
    product: {
      titles: {
        background: '#8BAA36',
        text: '#FAFAFA',
      },
      list: {
        pictureBackground: '#2A2C36',
        text: '#FAFAFA',
      },
      number: {
        background: '#8BAA36',
        text: '#FAFAFA',
      },
      icon: '#FAFAFA',
      hoverIcon: '#8BAA36',
    },
  },
  errorPage: {
    background: '#1E1F28',
    title: '#FAFAFA',
    text: {
      color: '#FAFAFA',
      opacity: '0.5',
    },
  },
  loader: {
    background: '#1E1F28',
    icon: '#FAFAFA',
  },
  userProfile: {
    background: '#2A2C36',
    closeIcon: '#FAFAFA',
    userPhoto: {
      circleBackground: '#D9D9D9',
      icon: '#C4C4C4',
      plusBackground: '#8BAA36',
      plusIcon: '#FAFAFA',
    },
    input: {
      outline: '#FAFAFA',
      text: '#FAFAFA',
      icon: '#FAFAFA',
    },
    button: {
      background: '#8BAA36',
      text: '#FAFAFA',
      hoverBackground: '#393c42',
    },
  },
  logout: {
    background: '#2A2C36',
    closeIcon: '#FAFAFA',
    text: '#FAFAFA',
    button1: {
      background: '#8BAA36',
      text: '#FAFAFA',
      hoverBackground: '#393c42',
    },
    button2: {
      background: '#D9D9D9',
      text: '#23262A',
      hoverBorder: '#23262A',
      hoverBackground: '#FFFFFF',
    },
  },
};
