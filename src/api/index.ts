const API = `${process.env.NEXT_PUBLIC_API_URL}`;

export const endPoints = {
  auth: {
    login: `${API}/login`,
    signup: `${API}/signup`,
  },
  users: {
    profile: (id: string) => `${API}/user/profile/${id}`,
  },
  table: {
    listTableAll: `${API}/table/list/all`,
    listTable: (limit: string, page: string) => `${API}/table/list/${limit}/${page}`,
    createTable: `${API}/table/create`,
    deleteTable: (id: string) => `${API}/table/delete/${id}`,
    updateTable: (id: string) => `${API}/table/updated/${id}`,
  },
};
