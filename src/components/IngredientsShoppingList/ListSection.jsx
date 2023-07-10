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
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="X">
                    <g id="X_2">
                      <path
                        id="Vector"
                        d="M10.9375 3.0625L3.0625 10.9375"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M10.9375 10.9375L3.0625 3.0625"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </svg>
              </CloseIcon>
            </DataSection>
          </Item>
        ))}
      </List>
    </>
  );
};
