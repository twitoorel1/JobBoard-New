import React from 'react';

/*
Theme
https://colorlib.com/wp/free-under-construction-templates/
*/

const underConstruction = () => {
	return (
		<div className="relative">
			<div className="fixed inset-0 z-50 flex flex-col w-full bg-green-300">
				<div className="grid grid-cols-5 gap-4 mt-10">
					<div className="col-span-5 xl:col-span-3 xl:col-start-2">
						<div className="border-b border-[#E2E8F0] flex justify-center">
							<h3 className="text-2xl font-semibold text-black">האתר בתחזוקה כרגע!</h3>
						</div>

						<div className="p-7">
							<div className="flex flex-col items-center mb-5 justify-normal">
								<h4 className="mb-2 text-xl font-semibold text-black">האתר יהיה זמין בקרוב מאוד</h4>
								<h4 className="text-xl font-semibold text-black">מצטערים על אי הנוחות</h4>
							</div>

							<div className="flex flex-col items-center justify-center">
								<span>לכל בעיה כלשהי תוכלו ליצור קשר עם המשרד</span>
								<span>*5433</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default underConstruction;
