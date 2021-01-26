import styled from 'styled-components';
import Canvas from './canvas';

const Container = styled.div`
  width: 100%;
  background: #000;
  flex: 1;
`

export default function BackgroundMatrix({ children }) {
  return (
    <Container>
      <Canvas />
      {children}
    </Container>
  )
}