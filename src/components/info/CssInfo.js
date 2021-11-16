import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CssInfo({link, id, title, desc1, desc2, default1, apply, version, definition, use}){
    return (
        <li>
            <Link to={{ pathname: "refer-detail", state: {link, id, title, desc1, desc2, default1, apply, version, definition, use} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{default1}</span>
            </Link>
        </li>
    )
}

CssInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    default1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    apply: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    definition: PropTypes.array.isRequired,
    use: PropTypes.string.isRequired,
}

export default CssInfo;