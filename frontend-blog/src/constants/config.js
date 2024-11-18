export const API_NOTIFICATION_MESSAGE = {
    loading: {
        title: 'Lading...',
        message: 'Data is being loaded, please wait'
    },
    success: {
        title: 'Success',
        message: 'Data Successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching response from the server. Please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data'
    },
    networkError: {
        tirle: 'Error',
        message: 'Unable to connect to with the server. Please check internet connectivity and try again later'
    }
}

export const SERVICE_URLS =  {
    userSignup: {url: '/signup', method: 'POST'}
}