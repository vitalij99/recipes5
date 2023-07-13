import data from "./data";
import { Link} from "react-router-dom";

import {
    CategoriesImg,
    CategoriesImgWrap,
    CategoriesList,
    ProductName,
    ProductNameWrap,
} from './Categories.styled';

export const CardItem = () => {
return (
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

    )
}