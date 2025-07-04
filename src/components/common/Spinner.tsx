import React from 'react';

const Spinner: React.FC = () => (
	<div className="flex justify-center items-center py-10">
		<div className="w-12 h-12 border-4 border-t-primary border-secondary-300 rounded-full animate-spin"></div>
	</div>
);

export default Spinner;