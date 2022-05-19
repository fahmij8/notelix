import Input from 'components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import type { SearchProps } from 'types';
import { useSearchValue } from 'hooks';

function Search({ className }: SearchProps) {
  const { value, setValue } = useSearchValue();

  return (
    <form className={`flex flex-row items-center ${className ?? ''}`}>
      <Input
        size="medium"
        type="text"
        name="search"
        placeholder="Search Notes..."
        className="mr-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} size="lg" />
    </form>
  );
}

export default Search;
