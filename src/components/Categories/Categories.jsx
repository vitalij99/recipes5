import data from "./data";
import { Link, NavLink } from "react-router-dom";

import {
    CategoriesImg,
    CategoriesImgWrap,
    CategoriesList,
    CategoriesNavList,
    CategoriesSection,
    ProductName,
    ProductNameWrap,
} from './Categories.styled';


export const Categories = () => {


    return (  
        <CategoriesSection>
        <CategoriesNavList>
        {data.map(
        ({ _id, category }) => (
        <li key={_id}>
        <NavLink to={`/categories/${category}`}>
         <p>{category}</p>
        </NavLink>  
        </li>
        )
         )} 
        </CategoriesNavList>
                    
            


        <CategoriesList>
       { data.map(
        ({ _id, title, thumb }) => (
            <li key={_id}>
            <Link
            to={`/recipe/${_id}`}>
           <CategoriesImgWrap>
            <CategoriesImg src={thumb} alt="img" />
            <ProductNameWrap>
            <ProductName>{title}</ProductName>   
            </ProductNameWrap>     
            </CategoriesImgWrap>      
            </Link>
            </li>
)
    )}
        </CategoriesList>
        </CategoriesSection>

    )
}