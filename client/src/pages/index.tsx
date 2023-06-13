import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/types/global';
import Layout from '@/layouts/Layout';

export default function Home(): JSX.Element {
	const { user } = useSelector((state: RootState) => state.auth);

	return (
		<Layout>
			<h1 className="text-2xl text-center">ברוך הבא {user && `${user.firstName}  ${user.lastName}`}</h1>
		</Layout>
	);
}
