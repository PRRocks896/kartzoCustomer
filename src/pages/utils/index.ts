import Swal from "sweetalert2";

/** Scroll to top */
export const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, 50);
};

/**
 * 
 * @param msg : success message
 */
export const showSuccess = (msg: string) => {
  Swal.fire({
    text: msg,
    icon: "success",
  });
};

/**
 * 
 * @param msg : error message
 */
export const showError = (msg: string) => {
  Swal.fire({
    text: msg,
    icon: "error",
  });
};

/** Get App Name In URL */
export const getAppName = () => {
  return " | Kartzoo App";
}

/** Get Token Details */
export const getHeaderDetail =  () => {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Access-Control-Allow-Origin": "*",
    crossdomain: true,
  };
}

/** Get Admin Token Details */
export const getAdminDetail =  () => {
  return {
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    "Access-Control-Allow-Origin": "*",
    crossdomain: true,
  };
}

/**
 * 
 * @param count : count
 * @param perpage : per page value
 */
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

/**
 * 
 * @param text : alert message
 * @param btext : button message
 */
export const alertMessage =  async (text:string,btext:string) => {
  let response = false;
  let result = await Swal.fire({
      title: "Are you sure?",
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: btext,
      cancelButtonText: "No, keep it",
  });
  if(result.value) {
      response = true
  } else if (result.dismiss === Swal.DismissReason.cancel) {
      response = false;
  }
  return response;
}
