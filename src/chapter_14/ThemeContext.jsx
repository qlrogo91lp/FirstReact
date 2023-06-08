import React from "react";

// Context를 생성
// 초기값은 설정하지 않고 Provider에서 생성
const ThemeContext = React.createContext();
// 개발자 도구에서 확인할 수 있는 이름을 설정
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;