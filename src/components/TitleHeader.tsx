import BackButton from "./button/BackButton.tsx";
import HomeButton from "./button/HomeButton.tsx";

interface TitleHeaderProps {
    title: string;
}

const TitleHeader = ({title}: TitleHeaderProps) => {
    return (
        <div style={{marginBottom: '10px'}}>
            <h3>{title}</h3>
            <div style={{display: 'flex', gap: 10}}>
                <BackButton/>
                <HomeButton/>
            </div>
            <hr/>
        </div>
    )
}

export default TitleHeader;