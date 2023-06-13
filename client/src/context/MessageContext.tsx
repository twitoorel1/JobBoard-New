import { createContext, ReactNode, useCallback, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/types/global';
import { message } from 'antd';
import { useRouter } from 'next/router';

type MessageContextType = {
	showMessage: () => void;
};

const MessageContext = createContext<MessageContextType>({
	showMessage: () => {}
});

export const useMessage = () => useContext(MessageContext);

type MessageProviderProps = {
	children?: ReactNode;
};

export const MessageProvider = ({ children }: MessageProviderProps) => {
	const { isLoading, isError, error } = useSelector((state: RootState) => state.auth || {});
	const router = useRouter();

	const showMessage = useCallback(
		(msg?: string) => {
			switch (isError) {
				case true:
					message.destroy();
					message.error(error);
					break;
				case false:
					message.destroy();
					message.success(error || 'Success');
					router.push('/authentication/login');
					break;

				default:
					break;
			}

			setTimeout(() => {
				message.destroy();
			}, 4000);
		},
		[isError, error, router]
	);

	useEffect(() => {
		if (isLoading && isError === null) {
			message.loading('Loading...');
		} else {
			showMessage();
		}
	}, [isLoading, isError]);

	return <MessageContext.Provider value={{ showMessage }}>{children}</MessageContext.Provider>;
};
