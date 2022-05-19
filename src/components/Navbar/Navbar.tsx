import { useId } from 'react';
import Logo from 'components/Logo';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Search from 'components/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const MODAL_ID = useId().replace(/:/g, '');
  return (
    <header>
      <nav className="flex flex-row justify-between p-5 items-center">
        <div className="w-28 md:w-36">
          <Logo />
        </div>
        <div className="hidden md:block md:w-1/3">
          <Search />
        </div>
        <div className="md:hidden">
          <Button theme="transparent" isModalTrigger modalId={MODAL_ID}>
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </Button>
        </div>
      </nav>
      <Modal id={MODAL_ID}>
        <Search className="mt-16" />
      </Modal>
    </header>
  );
}

export default Navbar;
