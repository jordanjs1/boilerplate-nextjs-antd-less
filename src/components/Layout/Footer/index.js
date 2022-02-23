/* --------------------------------------------------------
* Author Jordan Larson
*
* Created: 2020-03-01 17:08:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import classes from './style.module.less';

const Footer = (props) => {
	// const { } = props;

	return (
		<footer className={classes.footer}>
			<div>
				<strong className="text-primary">Boilerplate</strong>
				<span> 2021 © All Rights Reserved.</span>
			</div>
			<div className="ml-auto">
				<span>Powered by </span>
				<strong className="text-primary">Jordan Larson</strong>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	// classes: PropTypes.object.isRequired,
};

Footer.defaultProps = {
	// classes: {},
};

export default Footer;
