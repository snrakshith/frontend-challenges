import { useState } from "react";
import "./notification.css";

const icons = {
  success: (
    <>
      <h1>s</h1>
    </>
  ),
  danger: (
    <>
      <h1>d</h1>
    </>
  ),
  info: (
    <>
      <h1>i</h1>
    </>
  ),
  warning: (
    <>
      <h1>w</h1>
    </>
  ),
};

const Notification = ({
  type = "success",
  message,
  onClose = () => {},
}: any) => {
  return (
    <div className={`notification ${type}`}>
      {icons[type]}
      {message}
      <span onClick={() => onClose()}>X</span>
    </div>
  );
};
function useToaster(position = "top-right") {
  const [notification, setNotification] = useState(null);

  const toastMsg = (notificationProps: any) => {
    setNotification(notificationProps);
    setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  };

  const renderNotification = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { renderNotification, toastMsg };
}

export default useToaster;
