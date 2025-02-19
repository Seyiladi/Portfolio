export interface IAuthState {
  accessToken?: string;
  accessTokenExpiry?: string;
  refreshToken?: string;
  refreshTokenExpiry?: string;
  loginData?: ILoginResponseSuccess;
  firstname?: string;
  lastname?: string;
  email?: string;
  userId?: string;
  createdAt?: string;
  signupStatus: "idle" | "loading" | "failed" | "success";
  loginStatus: "idle" | "loading" | "failed" | "success";
  signupMessage?: string;
  count: number;
}

export interface ILoginResponseSuccess {
  status?: string;
  accessToken?: {
    token: string;
    expiry?: string;
  };
  refreshToken?: {
    token?: string;
    expiry?: string;
  };
  data: {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    emailVerified: boolean;
    // role:string;
    createdAt: string;
  };
}

export interface IGenericResponseSuccess {
  message: string;
  status: string;
}

export interface ISignupResponseSuccess extends IGenericResponseSuccess {}

export interface ISignupRequest {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface IPostOTP3 {
  otp: string;
  resetCode: string;
  newPassword: string;
}

export interface ISLogInRequest {
  email: string;
  password: string;
}

export interface UserProfile {
  firstname: string;
  lastname: string;
  username: string;
  description: string;
  biography: string;
  location: string;
  profession: string;
  company: string;
  country: string;
  language: string;
  professionalSkills: string[];
  softwareSkills: string[];
  portfolio: string;
  linkedIn: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

export interface UserProfileState {
  loading: boolean;
  profile: UserProfile | null;
  error: string | null;
}
