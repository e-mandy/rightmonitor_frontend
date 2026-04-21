import toastr from "toastr";
import "toastr/build/toastr.css";

interface Props {
  title?: string;
  message: string;
  type?: "success" | "info" | "warning" | "error";
  options?: ToastrOptions;
}

function Toast({ title, message, type = "info", options }: Props) {
  const toasterOptions = {
    closeButton: true,
    debug: true,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    showDuration: 300,
    hideDuration: 1000,
    timeOut: 5000,
    extendedTimeOut: 1000,
    ...options,
  };

  toastr[type](message, title, toasterOptions);

  return null;
}

export { Toast };
