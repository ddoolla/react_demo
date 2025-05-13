import BasicButton from "../components/button/BasicButton.tsx";

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <div style={{display: 'flex', gap: 10}}>
                <BasicButton text={'User List'} url={'/users'} />
                <BasicButton text={'MUI Home'} url={'/mui/home'} />
                <BasicButton text={'react-hook-form Home'} url={'/react-hook-form/home'} />
            </div>
        </div>
    )
}

export default Home;
