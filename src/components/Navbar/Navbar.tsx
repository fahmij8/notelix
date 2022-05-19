import Logo from 'components/Logo';
import Input from 'components/Input';

function Navbar() {
  return (
    <header>
      <nav className="flex flex-row justify-between p-5 items-center">
        <div className="w-28 md:w-36">
          <Logo />
        </div>
        <div>
          <Input size="medium" type="text" name="search" placeholder="Search Notes..." />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
