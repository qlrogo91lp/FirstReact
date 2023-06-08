import Card from "./card";

function ProfileCard(props) {
    return (
        <div>
            <Card title="Yoonjae Kim" backgroundColor="#4ea04e">
                <p>안녕하세요, 김윤재 입니다.</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>
            <Card title="Yoonjae Kim" backgroundColor="#4ea04e">
                <p>안녕하세요, 김윤재 입니다.</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>
        </div>
        
    );
}

export default ProfileCard;