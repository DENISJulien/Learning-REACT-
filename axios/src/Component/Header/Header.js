
import MenuAccueil from '../MenuAccueil/MenuAccueil';
import ModalLogin from '../ModalLogin/ModalLogin';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <MenuAccueil/>
            <SearchBar/>
            <ModalLogin/>
        </div>
    )
}

export default Header;