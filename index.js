const Notification = (props) => {
  const { icons, text, className } = props;
  const containerClassName = `sub-container ${className}`;
  return (
    <div className={containerClassName}>
      <img src={icons} className={`image ${className}`} />
      <p className={`${className}`}>{text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <Notification
      icons="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information Message"
      className="notification1"
    />
    <Notification
      icons="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Success Message"
      className="notification2"
    />
    <Notification
      icons="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Warning Message"
      className="notification3"
    />
    <Notification
      icons="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="Error Message"
      className="notification4"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
