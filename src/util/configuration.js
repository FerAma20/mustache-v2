import data from '../data/data.json'
export const getContactUsAction = data.Header.buttonAction.replace(/<phone-number>/g, process.env.REACT_APP_PHONE_NUMBER)