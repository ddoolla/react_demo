import TitleHeader from "../../components/TitleHeader.tsx";
import BasicButton from "../../components/button/BasicButton.tsx";

const RhfTestPage = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
            <TitleHeader title={"react-hook-form test"}/>
            <BasicButton text={'ex01'} url={'/react-hook-form/ex01'} />
            <BasicButton text={'ex02'} url={'/react-hook-form/ex02'} />
            <BasicButton text={'ex03'} url={'/react-hook-form/ex03'} />
            <BasicButton text={'ex04'} url={'/react-hook-form/ex04'} />
        </div>
    )
}

export default RhfTestPage;