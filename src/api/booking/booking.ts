import { endPoints } from '../index';
import axios from 'axios';
import { BookingsSchemaDto } from './bookingSchemasDto';

const listBooking = async (limit: string, page: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.booking.listBooking(limit, page), config);
  return response.data;
};

const listBookingAll = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.booking.listBookingAll, config);
  return response.data;
};

const createBooking = async (Booking: BookingsSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.booking.createBooking, Booking, config);
  return response.data;
};

const deleteBooking = async (id: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.booking.deleteBooking(id), config);
  return response.data;
};

const updateBooking = async (id: string, data: BookingsSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.booking.updateBooking(id), data, config);
  return response.data;
};

export { listBooking, listBookingAll, createBooking, deleteBooking, updateBooking };
