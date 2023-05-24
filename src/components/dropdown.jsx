import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { dropdown, icon } from '../assets';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function DropdownComponent() {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex justify-center w-full">
					<img src={dropdown} alt="dropdown" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-3 py-4 mt-1">
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Cargo Gear
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Daily Reports
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Cargo Operation
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Bunker
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Time Loss
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Port Turn out
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Ballast Tank
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Demurrage & Dispatch
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Voyage Summary
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a href="" className={classNames(active ? 'bg-custom-blue-2 text-white' : 'text-black', 'flex flex-row rounded-md px-3 py-2 text-sm gap-2')}>
									<img src={icon} alt="icon" />
									Grabs
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
