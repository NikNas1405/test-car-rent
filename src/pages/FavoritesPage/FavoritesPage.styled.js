import styled from 'styled-components';

export const Nothing = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  > p {
    width: 600px;
    font-size: 16px;
    line-height: 1.5;
    color: black;
  }

  > div {
    width: 200px;
    height: 200px;
  }
`;
