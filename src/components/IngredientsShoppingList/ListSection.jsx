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

export const ListSection = ({ data }) => {
  return (
    <>
      <List>
        {data.map(item => (
          <Item key={item._id.$oid}>
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
              <CloseIcon>
                <Svg />
              </CloseIcon>
            </DataSection>
          </Item>
        ))}
      </List>
    </>
  );
};
