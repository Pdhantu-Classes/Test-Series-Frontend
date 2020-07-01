export function handleError(err) {
    const errorResponse = err.response
    if (errorResponse) {
      const { status, message, error } = errorResponse.data
      return {
        name: error,
        message,
        status
      }
    } else {
      return {
        name: err.name,
        message: err.message,
        status: err.status
      }
    }
  }