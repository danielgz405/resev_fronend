export interface UserSchemaDto {
  name: string;
  email: string;
  password: string;
  role_id: string;
  phone: string;
}

export interface upadateUserDataDto {
  name: string;
  email: string;
  phone: string;
  role_id: string;
  image: string;
  image_ref: string;
  bookings: string[];
}
