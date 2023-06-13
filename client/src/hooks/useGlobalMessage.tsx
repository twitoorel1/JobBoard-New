import { useSelector } from "react-redux";
import { RootState } from "@/types/global";
import { message } from "antd";
import { useRouter } from "next/router";

const useGlobalMessage = () => {
  const isError = useSelector((state: RootState) => state.auth.isError);
  const error = useSelector((state: RootState) => state.auth.error);
  const router = useRouter();

  const showMessage = (messageText?: string) => {
    if (isError) {
      message.error(error);
    } else if (!isError) {
      message.success("פעולה בוצעה בהצלחה");
      router.push("/authentication/login");
    }
  };

  return showMessage;
};

export default useGlobalMessage;
