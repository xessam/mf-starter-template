import styled from 'styled-components';

const TWContainer = styled.div`
	width: 100%;
`;
const TWTitle = styled.div`
	text-align: center;
	font-weight: 600;
	font-size: 1rem;
	line-height: 1.5em;
	color: ${props => (props.theme.dark ? '#f2f2f2' : '#333333')};
	margin-top: 1.125rem;

	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
const TWAvatar = styled.img`
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	border-radius: 100%;
`;

const TWPlaceHolder = styled.div`
	background-color: #2c2c2e;
	position: absolute;
	z-index: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	border-radius: 100%;
`;
export { TWContainer, TWTitle, TWAvatar, TWPlaceHolder };
