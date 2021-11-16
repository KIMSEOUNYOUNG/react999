import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function JavasInfo({link, id, title, desc1, desc2, return1, definition}){
    return (
        <li>
            <Link to={{ pathname: "refer-detail", state: {link, id, title, desc1, desc2, return1, definition} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{return1}</span>
            </Link>
        </li>
    )
}

JavasInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    return1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,
    use: PropTypes.string.isRequired,
}

export default JavasInfo;