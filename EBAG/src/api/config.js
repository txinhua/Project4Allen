const API = {
    baseurl: 'http://mmh.sujiao1668.com/', 
    poems: {
        list: 'gsls/getGsList.do',
        detail: 'gsls/getDetailById.do'
    },
    ktsz: {
        list: 'ktsz/getTypeList.do',
        detail: 'ktsz/getAllDetailByTypeId.do'
    },
    thgs: {
        list: 'thgs/getGsList.do',
        detail: 'thgs/getDetailById.do'
    },
    usercenter: {
        advice: 'person/advice.do'
    },
    fullpath: (url) => {
        return baseurl + url
    }
};

export default {
   API    
}
