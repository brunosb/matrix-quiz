import React from 'react';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <div>
      Desafio da proxima aula junto com as animações
    </div>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmJson) => respostaConvertidaEmJson)
    .catch((err) => console.log(err));

  return {
    props: {
      dbExterno,
    },
  };
}
