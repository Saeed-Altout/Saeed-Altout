type ApiResponse = {
  success: boolean;
  message: string;
};

type User = {
  id: string;
  email: email;
  password: string;
  isVerified: boolean;
  role: "user" | "admin";
  refreshTokenHash: string;
  createdAt: Date;
  updatedAt: Date;
};
