import gitLogo from '../assets/logo.svg';
import { Container } from './styles';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import { api } from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
      alert('Repositorio já Existe!!!');
    } catch (error) {
      alert('Ocorreu um erro ao buscar o repositório');
    }
  };

  //REMOVER
  const handleRemoveRepo = id => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo do Git" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} key={repo.id} onRemove={() => handleRemoveRepo(repo.id)}/>)}
    </Container>
  );
}

export default App;
