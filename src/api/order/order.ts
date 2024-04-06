import { endPoints } from '../index';
import axios from 'axios';
import { OrderSchemaDto } from './orderSchemaDto';

const listOrder = async (limit: string, page: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.order.listOrder(limit, page), config);
  return response.data;
};

const listOrderAll = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.order.listOrderAll, config);
  return response.data;
};

const createOrder = async (Order: OrderSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.order.createOrder, Order, config);
  return response.data;
};

const deleteOrder = async (id: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.order.deleteOrder(id), config);
  return response.data;
};

const updateOrder = async (id: string, data: OrderSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.order.updateOrder(id), data, config);
  return response.data;
};

export { listOrder, listOrderAll, createOrder, deleteOrder, updateOrder };
