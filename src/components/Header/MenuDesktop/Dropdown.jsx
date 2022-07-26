import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// components
import MenuDesktopItem from './MenuDesktopItem';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClasses = classNames('dropdown', { block: dropdown }, { 'dropdown-submenu': depthLevel > 1 });
    return (
        <ul className={dropdownClasses}>
            {submenus.map((submenu, index) => (
                <MenuDesktopItem items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    );
};

Dropdown.propTypes = {
    submenus: PropTypes.array.isRequired,
    dropdown: PropTypes.bool,
    depthLevel: PropTypes.number,
};

Dropdown.defaultProps = {
    submenus: null,
    dropdown: false,
    depthLevel: 0,
};

export default Dropdown;
