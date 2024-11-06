import data from '../data/data.json';
export const getContactUsAction = data.Header.buttonAction.replace(/<phone-number>/g, process.env.REACT_APP_PHONE_NUMBER);

export const typeModal = {
    HORIZONTAL: {
        small:{
            width : 372,
            heigth: 248
        },
        large:{
            width : 720,
            heigth: 248
        }
    },
    VERTICAL:{
        small:{
            width : 248,
            heigth: 350
        },
        large:{
            width : 496,
            heigth: 700
        }
    },
    SQUARE:{
        small:{
            width : 248,
            heigth: 248
        },
        large:{
            width : 496,
            heigth: 496
        }
    }
};