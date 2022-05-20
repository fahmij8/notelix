/* eslint-disable max-len */
import { useMemo, useState } from 'react';
import { SearchValueContext } from 'hooks';
import Navbar from 'components/Navbar';
import Form from 'components/Form';
import Footer from 'components/Footer';
import NoteCard from 'components/NoteCard';
import { getInitialData } from 'utils';
import { Note } from 'types';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCircleXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const searchValueMemo = useMemo(
    () => ({ value: searchValue, setValue: setSearchValue }),
    [searchValue, setSearchValue],
  );
  const [notes, setNotes] = useState<Note[]>(getInitialData());
  const sortedNotes = useMemo(
    () => notes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [notes],
  );
  const activeNotes = useMemo(() => sortedNotes.filter((note) => !note.archived), [sortedNotes]);
  const archivedNotes = useMemo(() => sortedNotes.filter((note) => note.archived), [sortedNotes]);
  const searchOnActiveNotes = useMemo(
    () => activeNotes.filter((note) => note.title.toLowerCase().includes(searchValue.toLowerCase())),
    [activeNotes, searchValue],
  );
  const searchOnArchivedNotes = useMemo(
    () => archivedNotes.filter((note) => note.title.toLowerCase().includes(searchValue.toLowerCase())),
    [archivedNotes, searchValue],
  );
  const noteCardVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <SearchValueContext.Provider value={searchValueMemo}>
      <div className="App">
        <Navbar />
        <Form notes={notes} setNotes={setNotes} />
        <div className="flex flex-col mx-6 sm:mx-11 md:mx-20 py-4">
          <h2 className="my-4 font-bold text-2xl">Your Notes</h2>
          {activeNotes.length > 0 && searchOnActiveNotes.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="show"
              variants={noteCardVariants}
              className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-5 xl:gap-x-6 grid-flow-row-dense"
            >
              {searchValue
                ? searchOnActiveNotes.map((note) => (
                  <NoteCard key={note.id} note={note} notes={notes} setNotes={setNotes} />
                ))
                : activeNotes.map((note) => (
                  <NoteCard key={note.id} note={note} notes={notes} setNotes={setNotes} />
                ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center my-4">
              <FontAwesomeIcon icon={faPenToSquare} size="5x" className="text-gray-500" shake />
              <h3 className="text-gray-500 text-center mt-4">
                No active notes, lets write something.
              </h3>
            </div>
          )}
        </div>
        <div className="flex flex-col mx-6 sm:mx-11 md:mx-20 py-4">
          <h2 className="my-4 font-bold text-2xl">Archived</h2>
          {archivedNotes.length > 0 && searchOnArchivedNotes.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="show"
              variants={noteCardVariants}
              className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-5 xl:gap-x-6 grid-flow-row-dense"
            >
              {searchValue
                ? searchOnArchivedNotes.map((note) => (
                  <NoteCard key={note.id} note={note} notes={notes} setNotes={setNotes} />
                ))
                : archivedNotes.map((note) => (
                  <NoteCard key={note.id} note={note} notes={notes} setNotes={setNotes} />
                ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center my-4">
              <FontAwesomeIcon
                icon={faFileCircleXmark}
                size="5x"
                className="text-gray-500"
                bounce
              />
              <h3 className="text-gray-500 text-center mt-4">No archived notes</h3>
            </div>
          )}
        </div>
        <Footer />
        <Toaster />
      </div>
    </SearchValueContext.Provider>
  );
}

export default App;
