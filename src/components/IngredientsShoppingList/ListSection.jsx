import React from 'react';
import {
  CloseIcon,
  DataSection,
  ImageContainer,
  ImageSection,
  Item,
  List,
  Number,
} from './IngredientsShoppingList.styled';
import { Svg } from './Svg';

export const ListSection = ({ data, onClick }) => {
  // console.log(data);
  return (
    <>
      <List>
        {data.map(item => (
          <Item key={item.id}>
            <ImageSection>
              <ImageContainer>
                <img src={item.img} alt={item.name} />
              </ImageContainer>
              <p>{item.name}</p>
            </ImageSection>

            <DataSection>
              <Number>
                <p>300</p>
              </Number>
              <CloseIcon onClick={() => onClick(item.id)}>
                <Svg />
              </CloseIcon>
            </DataSection>
          </Item>
        ))}
      </List>
    </>
  );
};
