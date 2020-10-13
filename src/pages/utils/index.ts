import Swal from "sweetalert2";

export const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, 50);
};

export const showSuccess = (msg: string) => {
  Swal.fire({
    text: msg,
    icon: "success",
  });
};

export const showError = (msg: string) => {
  Swal.fire({
    // title: "Cancelled",
    text: msg,
    icon: "error",
  });
};
