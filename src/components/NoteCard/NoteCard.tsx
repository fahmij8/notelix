import Button from 'components/Button';
import type { NoteCardProps } from 'types';
import { showFormattedDate } from 'utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArchive } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function NoteCard({ note, notes, setNotes }: NoteCardProps) {
  const itemVariant = {
    hidden: { opacity: 0, transition: { duration: 0.2 } },
    show: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const handleDelete = () => {
    setNotes(notes.filter((item) => item.id !== note.id));
  };

  const handleArchive = () => {
    setNotes(
      notes.map((item) => (item.id === note.id ? { ...item, archived: !item.archived } : item)),
    );
  };

  return (
    <motion.div
      className="flex flex-col p-4 bg-gradient-to-tr from-[#2E2E3D] to-[#3A3A4D] shadow-lg rounded-xl h-fit"
      variants={itemVariant}
    >
      <h5 className="font-bold text-xl">{note.title}</h5>
      <small className="font-light text-xs">{showFormattedDate(note.createdAt)}</small>
      <p className="text-base mt-2 mb-3">{note.body}</p>
      <div className="flex justify-end">
        <Button theme="danger" className="mr-4 rounded-full" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} size="lg" className="mr-2" />
          Delete
        </Button>
        {note.archived ? (
          <Button theme="info" className="rounded-full" onClick={handleArchive}>
            <FontAwesomeIcon icon={faArchive} size="lg" className="mr-2" />
            Keep
          </Button>
        ) : (
          <Button theme="warning" className="rounded-full" onClick={handleArchive}>
            <FontAwesomeIcon icon={faArchive} size="lg" className="mr-2" />
            Archive
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export default NoteCard;
