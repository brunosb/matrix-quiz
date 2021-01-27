import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const CanvasStyled = styled.canvas`
  display: flex;
  flex: 1 1 auto;
`;

export default function Canvas({ props }) {
  const canvasRef = useRef(null);
  const [columns, setColumns] = useState(0);
  const fontSize = 20;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setColumns(canvas.width / fontSize);
  }, []);

  let letters = '四五六七八九十百千上下左右中大小月日年早'
    + '木林山川土空田天生花草虫犬人名女男子目耳口手足見音力気円'
    + '入出立休先夕本文字学校村町森正水火玉王石竹糸貝車金雨赤青'
    + '白数多少万半形太細広長点丸交光角計直線矢弱強高同親母父姉'
    + '兄弟妹自友体毛頭顔首心時曜朝昼夜分週春夏秋冬今新古間方北'
    + '南東西遠近前後内外場地国園谷野原里市京風雪雲池海岩星室戸'
    + '家寺通門道話言答声聞語読書記紙画絵図工教晴思考知才理算作'
    + '元食肉馬牛魚鳥羽鳴麦米茶色黄黒来行帰歩走止活店買売午汽弓'
    + '回会組船明社切電毎合当台楽公引';

  letters = letters.split('');

  const drops = [];
  for (let i = 0; i < columns; i += 1) {
    drops[i] = 1;
  }

  function draw() {
    const canvas = canvasRef?.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i += 1) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i] += 1;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }
  }

  setInterval(draw, 70);

  return <CanvasStyled ref={canvasRef} {...props} />;
}
