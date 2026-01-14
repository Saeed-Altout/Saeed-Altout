export interface User {
  id: string;
  email: string;
  password: string;
  isVerified: boolean;
  role: "user" | "admin";
  refreshTokenHash: string;
  createdAt: Date;
  updatedAt: Date;
}
