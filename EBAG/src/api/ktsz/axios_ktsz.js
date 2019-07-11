import API from '../config'
import instance from '../../utils/fetch_axios'

export const ktszList = () => {
    return instance.get(API.fullpath(API.ktsz.list), {});
}

export const ktszDetail = (params) => {
    return instance.post(API.fullpath(API.ktsz.detail), params);
}