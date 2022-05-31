import http from "./baseURL";

const BaseUri = "/ServicePost/PGPosts";

const getAll = () => http.get(BaseUri);

const get = (id) => {
  return http.get(BaseUri + "/" + id);
};

const getAllByUser = (id) => {
  return http.get(BaseUri + "/ByUserId/" + id);
};

const create = (data) => {
  return http.post(BaseUri, data);
};

const update = (id, data) => {
  return http.put(BaseUri + "/" + id, data);
};

const remove = (id) => {
  return http.delete(BaseUri + "/" + id);
};

const removeByUser = (id) => {
  return http.delete(BaseUri + "/DeleteByUserId/" + id);
};


export default {
  getAllByUser,
  removeByUser,
  getAll,
  get,
  create,
  update,
  remove
};
