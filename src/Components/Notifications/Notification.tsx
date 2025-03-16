import { Alert } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import s from "./styles.less";
import { hideNotification } from "../../redux/notificationSlice";

const Notification = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { message, type, isVisible, dismissible, dismissAfter } = useSelector((state: RootState) => state.notification);

  const onClose = () => {
    dispatch(hideNotification());
  };

  if (dismissAfter) {
    setTimeout(onClose, dismissAfter * 1000);
  }

  if (isVisible) {
    return (
      <Alert variant={type} onClose={onClose} dismissible={dismissible} className={s.notification}>
        {message}
      </Alert>
    );
  }
  return null;
}

export default Notification;