import classes from "./Notification.module.css";

const Notification = ({
  notification,
}: {
  notification: {
    status: string;
    title: string;
    message: string;
  };
}) => {
  const { status, title, message } = notification;

  let specialClasses = "";

  if (status === "error") {
    specialClasses = classes.error;
  }
  if (status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
