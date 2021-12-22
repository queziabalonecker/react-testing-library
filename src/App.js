import { useState } from 'react';
import { Dropdown } from './components/Dropdown';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  return (
    <div className='App'>
      {selectedPokemon && <div>Seu pokemon é: {selectedPokemon}</div>}

      <Dropdown
        title={'Selecione um Pokemon'}
        options={['Pidgey', 'Nidoran', 'Caterpie ']}
        onSelect={setSelectedPokemon}></Dropdown>
    </div>
  );
}

export default App;
