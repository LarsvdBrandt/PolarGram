import http from "./baseURL";

const BaseUri = "/ServiceComment/PGComments";

const getAll = () => http.get(BaseUri);

const getAllByPostId = (id) => {
  return http.get(BaseUri + "/ByPostId/" + id);
};

const create = (data) => {
  return http.post(BaseUri, data);
};

const remove = (id) => {
  return http.delete(BaseUri + "/" + id);
};


export default {
  getAll,
  getAllByPostId,
  create,
  remove
};
