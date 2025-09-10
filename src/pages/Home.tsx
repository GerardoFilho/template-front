import env from "../config/env";

const HomePage = () => {

    return (
        <>
            <h1> Template versão {env.__APP_VERSION__} </h1>
        </>
    );
};

export default HomePage;
