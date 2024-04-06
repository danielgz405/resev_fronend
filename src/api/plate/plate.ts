import { endPoints } from '../index';
import axios from 'axios';
import { PlatesSchemaDto } from './platesSchemaDto';

const listPlate = async (limit: string, page: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.plate.listPlate(limit, page), config);
  return response.data;
};

const listPlateAll = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.plate.listPlateAll, config);
  return response.data;
};

const createPlate = async (Plate: PlatesSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.plate.createPlate, Plate, config);
  return response.data;
};

const deletePlate = async (id: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.plate.deletePlate(id), config);
  return response.data;
};

const updatePlate = async (id: string, data: PlatesSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.plate.updatePlate(id), data, config);
  return response.data;
};

export { listPlate, listPlateAll, createPlate, deletePlate, updatePlate };
