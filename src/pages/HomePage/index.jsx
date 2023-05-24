import React from 'react';
import Dropdown from '../../components/dropdown';
import { cargoGear, var2, dailyComp, speedComp, cargoLoadingComp, cargoDischargeComp, voyageComp, bunkerComp, breakdownComp, grafik1, statistik, last } from '../../assets';

export default function HomePage() {
	return (
		<div>
			<div className="px-5 py-6 bg-black">
				<div className="flex flex-row items-center space-x-7">
					<div className="rounded-xl flex space-x-3 bg-card-sideNav px-3 py-2">
						<div className="">
							<div className="text-white">Dashboard</div>
						</div>
					</div>
					<div className="text-custom-grey text-opacity-60 text-sm">Cargo Gear</div>
					<div className="text-custom-grey text-opacity-60 text-sm">Breakdown</div>
					<div className="text-custom-grey text-opacity-60 text-sm">Daily Reports</div>
					<div className="text-custom-grey text-opacity-60 text-sm">Cargo Operation</div>
					<div className="text-custom-grey text-opacity-60 text-base">Bunker</div>
					<div className="text-custom-grey text-opacity-60 text-sm">Time Loss</div>
					<div className="text-custom-grey text-opacity-60 text-sm">Port Turn Out</div>
					<div className="text-custom-grey text-opacity-60 text-sm">Ballast Tank</div>
					<div className="text-custom-grey text-opacity-60 text-sm">Demarrage & Despatch</div>
					<div className="text-custom-grey text-opacity-60 text-sm">Voyage Summary</div>
				</div>
			</div>
			<div className="px-8 py-8">
				<div className="flex flex-rows justify-between">
					<div className="text-2xl font-bold">Global Ship Report</div>
					<Dropdown/>
				</div>
				<div className="mt-7">
					<div className="grid grid-cols-4 gap-x-1 gap-y-7">
						<div class="relative">
							<img src={cargoGear} />
							<div class="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300">
								<img src={var2} />
							</div>
						</div>
						<img src={dailyComp} />
						<img src={speedComp} />
						<img src={cargoLoadingComp} />
						<img src={cargoDischargeComp} />
						<img src={voyageComp} />
						<img src={bunkerComp} />
						<img src={breakdownComp} />
					</div>
				</div>
				<div className="mt-5">
					<div class="flex items-center">
						<hr class="flex-grow border-gray-400" />
						<span class="px-3 text-2xl text-custom-grey-2 font-bold">Cargo Gear</span>
						<hr class="flex-grow border-gray-400" />
					</div>
				</div>
				<div className="flex flex-row mt-5">
					<img src={grafik1} />
					<div className="flex flex-col rounded-xl bg-white ml-7 w-full">
						<div className="flex flex-row justify-between px-6 py-5 items-center">
							<div className="font-bold text-xl">Breakdown History</div>
							<div>Total: 20 hrs</div>
							<img src={statistik} />
						</div>
						<div className="flex flex-row mt-3 pl-3">
							<div className="flex flex-col">
								<div className="rounded-lg hover:bg-card-sideNav">
									<div className="hover:text-white ">Crane 1</div>
								</div>
								<div className="rounded-lg hover:bg-card-sideNav">
									<div className="hover:text-white ">Crane 2</div>
								</div>
								<div className="rounded-lg hover:bg-card-sideNav">
									<div className="hover:text-white ">Crane 3</div>
								</div>
								<div className="rounded-lg hover:bg-card-sideNav">
									<div className="hover:text-white ">Crane 4</div>
								</div>
							</div>
							<img src={last} className="ml-12" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
