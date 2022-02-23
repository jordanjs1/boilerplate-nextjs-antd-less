/* --------------------------------------------------------
* Author Jordan Larson
*
* Created: 2021-06-19 19:14:01
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

// import classes from './style.less';

import { html } from '../../../README.md';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Index = (props) => {
	// const { } = props;

	return (
		<div className="">
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
};

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

export default Index;
