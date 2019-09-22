import requestHandler from '../../../utils/apiRequestHandler';

export default {
    getBlogPost: (page, number) => requestHandler.get(`/posts?page=${page}&per_page=${number}`)
}