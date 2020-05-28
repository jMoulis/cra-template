import React from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
  flex: 1;
  justify-content: center;
  margin: 3rem;
`;
const Title = styled.h1`
  font-size: 5rem;
`;
const SubTitle = styled.h2`
  font-size: 3rem;
`;
const HeaderListItem = styled.li`
  font-size: 2rem;
  font-weight: bold;
`;

const HomePage = () => {
  return (
    <Root>
      <Title>Welcome</Title>
      <SubTitle>Here is an simple starter</SubTitle>

      <ul>
        <HeaderListItem>Libraries</HeaderListItem>
        <li>React (obviously)</li>
        <li>Typescript</li>
        <li>Redux</li>
        <li>React-Router</li>
        <li>Emotion (styling)</li>
        <li>Eslint - airBnb</li>
        <li>Absolute Import</li>
      </ul>
    </Root>
  );
};

export default HomePage;
