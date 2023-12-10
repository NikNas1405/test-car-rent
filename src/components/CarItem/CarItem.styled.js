import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';

export const CarItemStyled = styled.li`
  flex-basis: calc((100% - 3 * 29px) / 4);
  max-width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  color: #3470ff;
`;

export const StyledFaRegHeart = styled(FaRegHeart)`
  color: #ffffff;
`;

export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  height: 72px;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  > p {
    color: #121417;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const TitleHolder = styled.div`
  > span {
    color: #121417;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }

  > span:nth-child(2) {
    color: #3470ff;
  }
`;

export const MainInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  gap: 6px 4px;

  > li {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  > li:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

export const Button = styled.button`
  height: 44px;
  padding: 14px;
  background: #3470ff;
  color: #fff;
  border-radius: 12px;
  border: none;

  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
