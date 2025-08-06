import { Loading } from "cxt-design-system";
import { memo } from "react";
const LoadingPage = () => {
    return (<div style={{
        width: "100%",
        height: "100vh", display: 'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center'
    }}>
        {/* <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='#030067' size='xl' /> */}
        <Loading />
        <h1 style={{ fontWeight: 'bold' }}>Carregando...</h1>

    </div>);
}

export default memo(LoadingPage);