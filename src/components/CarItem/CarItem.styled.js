import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';

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
  }
`;

export const StyledFaHeart = styled(FaHeart)`
  color: #3470ff; /* Колір для активної іконки */
`;

export const StyledFaRegHeart = styled(FaRegHeart)`
  color: #ffffff; /* Колір для неактивної іконки */
`;

export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;
