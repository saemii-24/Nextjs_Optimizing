'use client';
import Link from 'next/link';
import {useState} from 'react';

interface MenuItem {
	label: string;
	items: string[];
}

const menuItems: MenuItem[] = [
	{
		label: 'Built-in Components',
		items: ['Image', 'Link', 'Script', 'Video'],
	},
	{
		label: 'Assets',
		items: ['Static Assets', 'Fonts', 'Public Files'],
	},
	{
		label: 'Optimization',
		items: ['Lazy Loading', 'Package Bundling', 'Memory Usage'],
	},
	{
		label: 'Metadata & SEO',
		items: ['Config-based', 'File-based', 'Open Graph'],
	},
	{
		label: 'Monitoring',
		items: ['Analytics', 'OpenTelemetry', 'Instrumentation'],
	},
];

const Header = () => {
	const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

	return (
		<header className='fixed left-0 top-0 z-50 h-14 w-full bg-white shadow-sm'>
			<nav className='h-full'>
				<ul className='flex h-full'>
					{menuItems.map((menu, index) => (
						<li
							key={index}
							className='relative'
							onMouseEnter={() => setActiveDropdown(index)}
							onMouseLeave={() => setActiveDropdown(null)}>
							<button className='flex h-full items-center px-6 font-medium transition-colors hover:bg-gray-50 hover:text-blue-600'>
								{menu.label}
							</button>

							{activeDropdown === index && (
								<ul className='absolute left-0 top-full z-10 w-56 rounded-b-md bg-white py-2 shadow-lg'>
									{menu.items.map((item, itemIndex) => (
										<li key={itemIndex}>
											<Link
												href={`/${menu.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/${item.toLowerCase().replace(/ /g, '-')}`}
												className='block px-4 py-2 transition-colors hover:bg-gray-50'>
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
