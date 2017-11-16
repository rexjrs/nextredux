import { language } from '../config/lang';
export const checkLang = (params, callback) => {
    let found = false
    if(params.query){
        if(params.query.lang){
            const languages = Object.keys(language)
            languages.forEach(element => {
                if(params.query.lang === element){
                    found = true
                    callback(true, params.query.lang) 
                }
            });
            if(!found){
                callback(false, null)      
                return false          
            }
        }else{
            if(!found){
                callback(false, null)      
                return false          
            }         
        }
    }
    if(!found){
        callback(false, null)      
        return false          
    }
}