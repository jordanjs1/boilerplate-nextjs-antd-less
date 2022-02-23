/* --------------------------------------------------------
* Author Jordan Larson
*
* Created: 2020-12-01 17:03:18
*------------------------------------------------------- */

import dayjs from 'src/utils/moment';

const formatDate = (date, format = 'YYYY/MM/DD HH:mm') => {
	if (!date) {
		return '--';
	}

	return (dayjs(date).format(format) + ' (UTC' + dayjs(date).format('Z')?.split(':')?.[0] + ')').toUpperCase();
};

export default formatDate;
