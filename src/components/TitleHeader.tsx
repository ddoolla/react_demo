import BackButton from "./button/BackButton.tsx";

interface TitleHeaderProps {
    title: string;
}

const TitleHeader = ({title}: TitleHeaderProps) => {
    return (
        <div style={{marginBottom: '10px'}}>
            <h3>{title}</h3>
            <BackButton/>
            <hr/>
        </div>
    )
}

export default TitleHeader;