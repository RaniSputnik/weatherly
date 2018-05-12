import React from 'react';

// TODO localize
const Header = ({ time, city }) => (
    <header>
        <a className="button is-text">{formatDate(time, "en-UK")}</a>
        <a className="button is-text">{city}</a>
    </header>
);

const formatDate = (time, locale) => {
    const opts = { weekday: 'long', month: 'long', day: 'numeric' };
    return time.toLocaleDateString(locale, opts)
}

export default Header;