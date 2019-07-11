import { get, post } from '../../utils/fetch'
import API from '../config'

async function ktszList(){
    return get(API.ktsz.list)
}

async function ktszDetail(id){
    return post(API.ktsz.detail,{typeId:id})
}

export default {
    ktszList,
    ktszDetail
}