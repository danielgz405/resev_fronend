const API = `${process.env.NEXT_PUBLIC_API_URL}`;

export const endPoints = {
  auth: {
    login: `${API}/login`,
    signup: `${API}/signup`,
  },
  users: {
    profile: (id: string) => `${API}/user/profile/${id}`,
    createUser: `${API}/user/create`,
    deleteUser: (id: string) => `${API}/user/delete/${id}`,
    updatedUser: (id: string) => `${API}/user/update/${id}`,
  },
  table: {
    createTable: `${API}/table/create`,
    getTableById: (id: string) => `${API}/table/${id}`,
    updateTable: (id: string) => `${API}/table/updated/${id}`,
    deleteTable: (id: string) => `${API}/table/delete/${id}`,
    listTable: (limit: string, page: string) => `${API}/table/list/${limit}/${page}`,
    listTableAll: `${API}/table/list/all`,
  },
  role: {
    createRole: `${API}/role/create`,
    getRoleById: (id: string) => `${API}/role/${id}`,
    updateRole: (id: string) => `${API}/role/updated/${id}`,
    deleteRole: (id: string) => `${API}/role/delete/${id}`,
    listRole: (limit: string, page: string) => `${API}/role/list/${limit}/${page}`,
    listRoleAll: `${API}/role/list/all`,
  },
  plate: {
    createPlate: `${API}/plate/create`,
    getPlateById: (id: string) => `${API}/plate/${id}`,
    updatePlate: (id: string) => `${API}/plate/updated/${id}`,
    deletePlate: (id: string) => `${API}/plate/delete/${id}`,
    listPlate: (limit: string, page: string) => `${API}/plate/list/${limit}/${page}`,
    listPlateAll: `${API}/plate/list/all`,
  },
  order: {
    createOrder: `${API}/order/create`,
    getOrderById: (id: string) => `${API}/order/${id}`,
    updateOrder: (id: string) => `${API}/order/updated/${id}`,
    deleteOrder: (id: string) => `${API}/order/delete/${id}`,
    listOrder: (limit: string, page: string) => `${API}/order/list/${limit}/${page}`,
    listOrderAll: `${API}/order/list/all`,
  },
  booking: {
    createBooking: `${API}/booking/create`,
    getBookingById: (id: string) => `${API}/booking/${id}`,
    updateBooking: (id: string) => `${API}/booking/updated/${id}`,
    deleteBooking: (id: string) => `${API}/booking/delete/${id}`,
    listBooking: (limit: string, page: string) => `${API}/booking/list/${limit}/${page}`,
    listBookingAll: `${API}/booking/list/all`
  }
};
