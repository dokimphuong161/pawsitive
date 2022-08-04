import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import PropTypes from 'prop-types';

const MenuMobileItem = ({ items }) => {
    const [openItem, setOpenItem] = useState(false);
    const handleToggleItem = () => {
        setOpenItem((prev) => !prev);
    };
    return (
        <div className="py-1 ">
            {items.children ? (
                <>
                    <div
                        className="sidebar-title flex items-center hover:text-primary-800 font-semibold"
                        onClick={handleToggleItem}
                    >
                        <span>{items.title}</span>
                        <MdOutlineKeyboardArrowDown
                            className={`transition ml-4 duration-300  ${openItem ? 'rotate-180' : ''}`}
                        />
                    </div>
                    <div className={`sidebar-content px-6 h-0 overflow-hidden ${openItem ? 'h-auto pt-1 ' : ''}`}>
                        {items.children.map((submenu, index) => (
                            <MenuMobileItem items={submenu} key={index} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <a href="#" className="hover:text-primary-800 font-semibold">
                        {items.title}
                    </a>
                </>
            )}
        </div>
    );
};

MenuMobileItem.propTypes = {
    items: PropTypes.object.isRequired,
};

export default MenuMobileItem;
