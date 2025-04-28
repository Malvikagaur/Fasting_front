export const handleApiResponse = (response, onSuccess, onError) => {
    if (response?.success) {
      onSuccess && onSuccess(response);
    } else {
      onError && onError(response?.message || 'Something went wrong');
    }
  };
  
  export const catchAsyncError = (error, onError) => {
    const message = error?.response?.data?.message || error?.message || 'Unexpected error occurred';
    onError && onError(message);
  };
  