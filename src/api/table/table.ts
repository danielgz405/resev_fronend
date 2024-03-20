import { endPoints } from '../index';
import axios from 'axios';
import { TableSchemaDto } from './tableSchemasDto';

const listTable = async (limit: string, page: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.table.listTable(limit, page), config);
  return response.data;
};

const listTableAll = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.table.listTableAll, config);
  return response.data;
};

const createTable = async (Table: TableSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.table.createTable, Table, config);
  return response.data;
};

const deleteTable = async (id: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.table.deleteTable(id), config);
  return response.data;
};

const updateTable = async (id: string, data: TableSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.table.updateTable(id), data, config);
  return response.data;
};

export { listTable, listTableAll, createTable, deleteTable, updateTable };
