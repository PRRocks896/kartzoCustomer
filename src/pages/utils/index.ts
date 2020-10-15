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
    text: msg,
    icon: "error",
  });
};

export const getAppName = () => {
  return " | Kartzoo App";
}

export const getHeaderDetail =  () => {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Access-Control-Allow-Origin": "*",
    crossdomain: true,
  };
}

export const getAdminDetail =  () => {
  return {
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    "Access-Control-Allow-Origin": "*",
    crossdomain: true,
  };
}

export const pageNumber = (count:string,perpage:string) => {
  var pageNumbers = [];
  for (
    let i = 1;
    i <=
    Math.ceil(
      parseInt(count) / parseInt(perpage)
    );
    i++
  ) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}
