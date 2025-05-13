import BackButton from "./button/BackButton.tsx";

interface TitleHeaderProps {
    title: string;
}

const TitleHeader = ({title}: TitleHeaderProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <BackButton/>
        </div>
    )
}

export default TitleHeader;