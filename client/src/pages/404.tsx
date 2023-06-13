import Image from 'next/image';
import Link from 'next/link';

export default function Error404() {
	return (
		<>
			<main className="relative min-h-screen isolate">
				<img
					src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
					alt=""
					className="absolute inset-0 object-cover object-bottom w-full h-full -z-10"
				/>
				<div className="px-6 py-32 mx-auto text-center max-w-7xl sm:py-40 lg:px-8">
					<p className="text-base font-semibold leading-8 text-white">שגיאה 404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">העמוד לא נמצא</h1>
					<p className="mt-4 text-base text-white/70 sm:mt-6">מצטערים, לא הצלחנו למצוא את הדף שאת/ה מחפש/ת.</p>
					<div className="flex justify-center mt-10 shadow-2xl bg-gray-50/30">
						<Link href={'/'} className="font-medium leading-7 text-white text-md">
							<span aria-hidden="true">&larr;</span> לחזור לדף הבית
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
