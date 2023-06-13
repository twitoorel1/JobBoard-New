import '@/styles/globals.css';
import '@/styles/loader.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { lazy } from 'react';
import useLoader from '@/hooks/useLoader';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { MessageProvider } from '@/context/MessageContext';
import { AuthProvider } from '@/context/AuthenticationContext';
import { useRouter, Router } from 'next/router';

const Loader = lazy(() => import('@/components/common/Loader'));

export default function App({ Component, pageProps }: AppProps) {
	const isLoading = useLoader(2000);
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Boeing HRM</title>
			</Head>
			<Provider store={store}>
				<AuthProvider>
					<MessageProvider>
						<div>{isLoading ? <Loader /> : <Component {...pageProps} />}</div>
					</MessageProvider>
				</AuthProvider>
			</Provider>
		</>
	);
}
