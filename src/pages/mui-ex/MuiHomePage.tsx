import TitleHeader from "../../components/TitleHeader.tsx";
import Menu from "../../components/Menu.tsx";

const MuiHomePage = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
            <TitleHeader title={"MUI Home"}/>
            <div>
                <h3>Layout</h3>
                <Menu text={'Box'} url={'/mui/ex/layout/box'} title={'layout - Box'} />
            </div>
        </div>
    )
}

export default MuiHomePage;