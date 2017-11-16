import { language } from '../../config/lang';
export default function reducer(state = {
    language: language['en']
}, action) {
    switch (action.type) {
        case "changeLang":
            return { ...state, language: language[action.payload] }
    }
    return state
}