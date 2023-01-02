export default (error) => {
  let message = error?.response?.data?.message;
  if (message === 'ValidationError')
    message = error?.response?.data?.errors.map((x) => x.message).join('\n');
  return message || error?.message || 'Unknown Error';
};
