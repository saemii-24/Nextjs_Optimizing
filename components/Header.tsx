import React from 'react';

const items = [
	'Images',
	'Videos',
	'Fonts',
	'Metadata',
	'Scripts',
	'Package Bundling',
	'Lazy Loading',
	'Analytics',
	'Instrumentation',
	'Open Telemetry',
	'Static Assets',
	'Third Party Libraries',
	'Memory Usage',
];

const Header = () => {
	return (
		<header className='w-full'>
			<ul className='flex w-full'>
				{items.map((item, index) => {
					return (
						<li key={index} className='grow text-center'>
							{item}
						</li>
					);
				})}
			</ul>
		</header>
	);
};

export default Header;
