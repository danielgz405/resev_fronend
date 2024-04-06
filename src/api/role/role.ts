import { endPoints } from '../index';
import axios from 'axios';
import { RoleSchemaDto } from './rolesSchemasDto';

const listRole = async (limit: string, page: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.role.listRole(limit, page), config);
  return response.data;
};

const listRoleAll = async () => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(endPoints.role.listRoleAll, config);
  return response.data;
};

const createRole = async (Role: RoleSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.role.createRole, Role, config);
  return response.data;
};

const deleteRole = async (id: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.role.deleteRole(id), config);
  return response.data;
};

const updateRole = async (id: string, data: RoleSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.role.updateRole(id), data, config);
  return response.data;
};

export { listRole, listRoleAll, createRole, deleteRole, updateRole };
