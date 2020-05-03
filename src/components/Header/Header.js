import React, {Component} from "react";
import TopNav from "./TopNav/TopNav";
import Logo from "./Logo/Logo";
import Hamburger from "./Hamburger/Hamburger";
import SearchContainer from "./SearchBar/SearchContainer";

class Header extends Component {

    render() {
        const styles = {
            logo: {
                alignSelf: 'center',
                width: '40px',
            }
        };

        return(
            <header>
                <div className='container row row-v-centered space-between'>
                    <div className="column">
                        <div className="row">
                            <Hamburger styles={ styles.logo }/>
                            <Logo  path='/' styles={ styles.logo} />
                        </div>
                    </div>
                    <div className="column col-1-2">
                        <SearchContainer/>
                    </div>
                    <div className="column">
                        <TopNav/>
                    </div>
                </div>
            </header>
        );
    }
}

export default  Header;
