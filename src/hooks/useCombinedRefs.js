/* --------------------------------------------------------
* Author Jordan Larson
*
* Created: 2021-06-11 23:05:04
*------------------------------------------------------- */
import React from 'react';

const useCombinedRefs = (...refs) => {
	const targetRef = React.useRef();

	React.useEffect(() => {
		refs.forEach(ref => {
			if (!ref) return;

			if (typeof ref === 'function') {
				ref(targetRef.current);
			} else {
				// eslint-disable-next-line no-param-reassign
				ref.current = targetRef.current;
			}
		});
	}, [refs]);

	return targetRef;
};

export default useCombinedRefs;
