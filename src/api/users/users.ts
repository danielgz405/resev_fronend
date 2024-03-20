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

export { signUp };