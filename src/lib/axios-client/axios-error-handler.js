const catchAxiosError = (error) => {
  const status = error?.response ? error?.response.status : null;

  if (error?.response) {
    if (status === 404) {
      // todo: rewire response for apis that not found
      return Promise.reject({ status: status, ...error?.response?.data });
    }

    if (status === 500) {
      return null;
    }
  } else if (error.request) {
    return Promise.reject(error.message);
  } else {
    console.log("Error", error.message);
  }

  return Promise.reject(error?.response?.data || error?.response);
};

export { catchAxiosError };
