import gitLogo from '../assets/logo.svg'
import { Container } from './styles';
import Input from '../components/Input';


function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo do Git" />
      <Input />

    </Container>
  );
}

export default App;
