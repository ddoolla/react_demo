import BasicButton from "./button/BasicButton.tsx";

interface MenuProps {
    text: string;
    url: string;
    title: string;
}

const Menu = ({text, url, title}: MenuProps) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <BasicButton text={text} url={url} />
            <span>{title}</span>
        </div>
    )
}

export default Menu