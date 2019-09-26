import React from 'react';
import Login from './login'
import Search from '../elements/search';
const messageDay = new Date()
class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                {messageDay.getHours() < 12 ? (
                    <h1>Buongiorno</h1>
                ) : (
                    <h1>Buonasera</h1>
                )}
                <Login />
                <Search />
            </div>
        )
    }
}

export default Header;