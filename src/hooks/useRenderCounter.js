import React from "react";

export const useRenderCounter = () => {
	const ref = React.useRef();
	React.useEffect(() => {
		ref.current.textContent = Number(ref.current.textContent || '0') + 1;
	});
	return (
		<span
			style={{
				backgroundColor: '#2c2c2c',
				borderRadius: 4,
				padding: '2px 4px',
				fontSize: '0.8rem',
				margin: '0 6px',
				display: 'inline-block'
			}}
			ref={ref}
		/>
	);
}