import React from 'react';

import Menu from './Menu';

function Header(props){
    return (
        <div className="header">
            <div className='item-left'>
                <p>Онлайн-калькулятор</p>
            </div>
            <div className='item-right'>
                <Menu setPage={ props.setPage } calculators={ props.calculators } calculatorsActive={ props.calculatorsActive } />
            </div>
        </div>
    );
}

export default Header;