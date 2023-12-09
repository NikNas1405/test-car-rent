import styled from 'styled-components';

export const CarItemStyled = styled.li`
  flex-basis: calc((100% - 3 * 29px) / 4);
  max-width: 274px;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 14px;
  margin-bottom: 14px;
  height: 268px;

  display: flex;
  flex-direction: column;

  > img {
    object-fit: cover;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  > svg {
    width: 18px;
    height: 18px;
    fill: ${props => (props.isFavorite ? '#3470FF' : '#FFFFFF')};
  }
`;

export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;
