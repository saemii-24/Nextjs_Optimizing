'use client'
import React, { useState } from 'react';
import Link from 'next/link';

interface MenuItem {
	label: string;
	items: string[];
}

const menuItems: MenuItem[] = [
	{
		label: 'Built-in Components',
		items: ['Image', 'Link', 'Script']
	},
	{
		label: 'Assets',
		items: ['Static Assets', 'Fonts', 'Public Files']
	},
	{
		label: 'Optimization',
		items: ['Lazy Loading', 'Package Bundling', 'Memory Usage']
	},
	{
		label: 'Metadata & SEO',
		items: ['Config-based', 'File-based', 'Open Graph']
	},
	{
		label: 'Monitoring',
		items: ['Analytics', 'OpenTelemetry', 'Instrumentation']
	}
];

const Header = () => {
	const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

	return (
		<header className='w-full bg-white shadow-sm fixed top-0 left-0 h-14 z-50'>
			<nav className='h-full'>
				<ul className='flex h-full'>
					{menuItems.map((menu, index) => (
						<li 
							key={index}
							className='relative'
							onMouseEnter={() => setActiveDropdown(index)}
							onMouseLeave={() => setActiveDropdown(null)}
						>
							<button className='h-full px-6 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium flex items-center'>
								{menu.label}
							</button>
							
							{activeDropdown === index && (
								<ul className='absolute left-0 top-full w-56 bg-white shadow-lg rounded-b-md py-2 z-10'>
									{menu.items.map((item, itemIndex) => (
										<li key={itemIndex}>
											<Link 
												href={`/${menu.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/${item.toLowerCase().replace(/ /g, '-')}`}
												className='block px-4 py-2 hover:bg-gray-50 transition-colors'
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
