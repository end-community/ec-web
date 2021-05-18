interface UserGender {
  MALE: "MALE";
  FEMALE: "FEMALE";
}
export interface IUser {
  id: number;
  nickname: string;
  phoneNumber?: string;
  email?: string;
  thumbnail?: string;
  birthDate: Date;
  gender?: UserGender;
}
