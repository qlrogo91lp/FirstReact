import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
]

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // state 초기화
        this.state = {
            notifications: [],
        }
    };

    // 생명주기 함수 : componentDidMount()
    componentDidMount() {
        const { notifications } = this.state;
        
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                // state를 업데이트 하는 함수 : setState() 
                this.setState({
                    notifications: notifications,
                });
            } else {
                // notifications 비우기
                this.setState({
                    notifications: [],
                })
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                        // key : React Element를 구분하기 위한 unique key
                        // map() 사용하기 위해서 필수적으로 사용
                        key={notification.id}
                        id={notification.id}
                        message={notification.message} /> 
                })}
            </div>
        );
    }
}

export default NotificationList;
