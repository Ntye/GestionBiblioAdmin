import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {useConfig} from "../theme/ConfigProvider.tsx";
import { GiBookPile } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";

const Sidebar: React.FC = () => {
	const { config } = useConfig();
	const navigate = useNavigate();

	const sidebarItems = [
		{ id: 'overview', label: 'Overview', icon: 'chart-pie' },
		{ id: 'books', label: 'Books', icon: 'book-open' },
		{ id: 'users', label: 'Users', icon: 'users' },
		{ id: 'loans', label: 'Loans', icon: 'clipboard-list' },
		{ id: 'returns', label: 'Returns', icon: 'clipboard-check' },
		{ id: 'settings', label: 'Settings', icon: 'cog' },
		{ id: 'theme', label: 'Theme', icon: 'adjustments' }
	];

	const handleLogout = () => {
		// Handle logout logic here
		// For example, clear any stored tokens or user data
		// Then navigate to landing page
		navigate('/');
	};

	const renderLogo = () => {
		return <GiBookPile className="w-8 h-8 text-primary"/>;
	};

	const renderIcon = (iconName: string) => {
		switch (iconName) {
			case 'chart-pie':
				return (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
					</svg>
				);
			case 'book-open':
				return (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
				);
			case 'users':
				return (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
					</svg>
				);
			case 'clipboard-list':
				return (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
					</svg>
				);
			case 'clipboard-check':
				return (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
					</svg>
				);
			case 'cog':
				return (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
					</svg>
				);
			case 'adjustments':
				return (
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
					</svg>
				);
			default:
				return null;
		}
	};

	return (
		<div className="bg-secondary w-64 shadow-md fixed h-full flex flex-col">
			<div className="p-6 border-b border-secondary-300 flex justify-between items-center">
				<div className="flex items-center space-x-3">
					{renderLogo()}
					<h1 className="text-lg font-bold text-primary">{config.Name}</h1>
				</div>
			</div>

			<nav className="mt-6 flex-grow">
				<div className="px-6 pb-4">
					<p className="text-xs font-medium text-primary-800 uppercase tracking-wider mb-4">
						Main
					</p>
					<ul className="space-y-2">
						{sidebarItems.map(item => (
							<li key={item.id}>
								<NavLink
									to={`/dashboard${item.id === 'overview' ? '' : `/${item.id}`}`}
									className={({ isActive }) => `flex items-center w-full px-4 py-2 rounded-md transition-colors ${
										isActive
											? 'bg-primary text-white'
											: 'hover:bg-secondary-300 text-primary-800'
									}`}
									end={item.id === 'overview'} // This fixes the "always active" issue for overview
								>
									<span className="mr-3">{renderIcon(item.icon)}</span>
									<span>{item.label}</span>
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</nav>

			{/* Logout button at the bottom of the sidebar */}
			<div className="mt-auto p-6 border-t border-secondary-300">
				<button
					onClick={handleLogout}
					className="flex items-center w-full px-4 py-2 rounded-md transition-colors text-red-600 hover:bg-red-100 hover:text-red-800"
				>
          <span className="mr-3">
            <BiLogOut className="w-5 h-5" />
          </span>
					<span>Logout</span>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;