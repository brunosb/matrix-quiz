import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import BackgroundMatrix from '../src/components/BackgroundMatrix';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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

            <form onSubmit={onSubimitForm}>
              <Input
                name=""
                placeholder="Digite seu nome"
                onChange={onChangeName}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content />
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/brunosb" />
    </BackgroundMatrix>
  );
}
