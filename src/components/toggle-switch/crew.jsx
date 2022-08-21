import React from 'react';
import Ratio from '../ratio';
import { getImage } from '../../utils/tools';

import { TWContainer, TWTitle, TWAvatar, TWPlaceHolder } from './style';

function Crew({ data, ...rest }) {
	const { uri, name } = data;
	return (
		<TWContainer {...rest}>
			<Ratio ratio={1}>
				<TWAvatar src={getImage(uri)} />
				<TWPlaceHolder />
			</Ratio>
			<TWTitle>{name}</TWTitle>
		</TWContainer>
	);
}

export default Crew;
