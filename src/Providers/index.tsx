import RequestProvider from "./RequestProvider";
import ToastProvider from "./ToastProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <RequestProvider>
            <ToastProvider />
            {children}
        </RequestProvider>
    );
}

export default Providers