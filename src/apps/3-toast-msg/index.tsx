import useToaster from "./useToaster";

function ToastPage() {
  const { renderNotification, toastMsg } = useToaster("top-right");
  return (
    <div>
      <button
        onClick={() =>
          toastMsg({
            type: "success",
            msg: "Thanks for subscribing!",
            duration: 3000,
          })
        }
      >
        Show success
      </button>
      <button
        onClick={() =>
          toastMsg({
            type: "error",
            msg: "Something went wrong",
            duration: 3000,
          })
        }
      >
        Show Error
      </button>
      <button
        onClick={() =>
          toastMsg({
            type: "info",
            msg: "Thanks for subscribing!",
            duration: 3000,
          })
        }
      >
        Show Info
      </button>
      <button
        onClick={() =>
          toastMsg({
            type: "info",
            msg: "Thanks for subscribing!",
            duration: 3000,
          })
        }
      >
        Show Warning
      </button>
      {renderNotification}
    </div>
  );
}

export default ToastPage;
