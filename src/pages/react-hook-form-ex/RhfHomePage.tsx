import TitleHeader from "../../components/TitleHeader.tsx";
import Menu from "../../components/Menu.tsx";

const RhfHomePage = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
            <TitleHeader title={"react-hook-form Home"}/>
            <Menu text={'ex01'} url={'/react-hook-form/ex/ex01'} title={'기본 예제'} />
            <Menu text={'ex02'} url={'/react-hook-form/ex/ex02'} title={'필드 등록 예제'} />
            <Menu text={'ex03'} url={'/react-hook-form/ex/ex03'} title={'검증 적용 방법 예제'} />
            <Menu text={'ex04'} url={'/react-hook-form/ex/ex04'} title={'기존 폼 통합 예제'} />
            <Menu text={'ex05'} url={'/react-hook-form/ex/ex05'} title={'외부 UI 라이브러리 통합 예제'} />
            <Menu text={'ex06'} url={'/react-hook-form/ex/ex06'} title={'Controller 컴포넌트 사용 예제'} />
            <Menu text={'ex07'} url={'/react-hook-form/ex/ex07'} title={'useController 훅 사용 예제'} />
            <Menu text={'ex08'} url={'/react-hook-form/ex/ex08'} title={'에러 처리 예제'} />
            <Menu text={'ex09'} url={'/react-hook-form/ex/ex09'} title={'useFieldArray 예제'} />
            <Menu text={'ex10'} url={'/react-hook-form/ex/ex10'} title={'useFormContext 예제'} />
        </div>
    )
}

export default RhfHomePage;