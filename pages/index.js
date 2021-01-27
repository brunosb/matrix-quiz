import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import BackgroundMatrix from '../src/components/BackgroundMatrix';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  z-index: 5;
  position: absolute;
  top: 0;
  @media screen and (max-width: 500px) {
    margin:auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  function onSubimitForm(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  function onChangeName(event) {
    setName(event.target.value);
  }

  return (
    <BackgroundMatrix>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <form onSubmit={onSubimitForm}>
              <input placeholder="Digite seu nome" onChange={onChangeName} />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/brunosb" />
    </BackgroundMatrix>
  );
}
