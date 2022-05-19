import { useMemo, useState } from 'react';
import { SearchValueContext } from 'hooks';
import Navbar from 'components/Navbar';

function App() {
  const [value, setValue] = useState('');
  const searchValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  return (
    <SearchValueContext.Provider value={searchValue}>
      <div className="App">
        <Navbar />
      </div>
    </SearchValueContext.Provider>
  );
}

export default App;
