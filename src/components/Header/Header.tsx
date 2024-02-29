import './header.css';
import { ReactComponent as Logo } from '../../assets/svg/headerLogo.svg';

interface HeaderProps {
  isActivePreview: boolean;
  setIsActivePreview: (x: boolean) => void;
  selectedItem: boolean;
}

const Header = ({
  isActivePreview,
  setIsActivePreview,
  selectedItem,
}: HeaderProps) => {
  //console.log(isActivePreview);
  return (
    <header className='header'>
      <Logo className='header__logo' />
      <button
        type='button'
        className={
          selectedItem
            ? 'header__button'
            : 'header__button header__button_inactive'
        }
        onClick={() =>
          isActivePreview && selectedItem
            ? setIsActivePreview(false)
            : setIsActivePreview(true)
        }
      >
        {isActivePreview && selectedItem ? `Return` : `Preview`}
      </button>
    </header>
  );
};

export default Header;
