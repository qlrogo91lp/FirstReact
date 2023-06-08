import { useContext } from "react";
import ThemeContext from "./ThemeContext";

// ThemeContext로부터 현재 설정된 테마값을 가져와 실제 컨텐츠를 랜더링
function MainContent(props) {
    // ThemeContext.consumer() 컴포넌트를 사용하는 대신에 useContext() 훅을 사용
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div 
            style={{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹사이트입니다.</p>   
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;