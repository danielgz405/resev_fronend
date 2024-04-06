import axios from "axios";
import { UserSchemaDto } from "./usersSchemasDto";
import { endPoints } from "..";

const signUp = async (user: UserSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.auth.signup, user, config);
  return response.data;
};

const createUser = async (User: UserSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.users.createUser, User, config);
  return response.data;
};

const deleteUser = async (id: string) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.delete(endPoints.users.deleteUser(id), config);
  return response.data;
};

const updateUser = async (id: string, data: UserSchemaDto) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.patch(endPoints.users.updatedUser(id), data, config);
  return response.data;
};

export { signUp, createUser, deleteUser, updateUser };