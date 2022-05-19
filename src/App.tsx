import { useMemo, useState } from 'react';
import { SearchValueContext } from 'hooks';
import Navbar from 'components/Navbar';
import Form from 'components/Form';
import { getInitialData } from 'utils';
import { Note } from 'types';
import { Toaster } from 'react-hot-toast';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const searchValueMemo = useMemo(
    () => ({ value: searchValue, setValue: setSearchValue }),
    [searchValue, setSearchValue],
  );
  const [notes, setNotes] = useState<Note[]>(getInitialData());
  return (
    <SearchValueContext.Provider value={searchValueMemo}>
      <div className="App">
        <Navbar />
        <Form notes={notes} setNotes={setNotes} />
        <Toaster />
      </div>
    </SearchValueContext.Provider>
  );
}

export default App;
