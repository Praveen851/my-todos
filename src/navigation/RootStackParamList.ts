type LoginScreenParams = {
    title: string;
};

type RegisterScreenParams = {
    title: string;
};

export type RootStackParamList = {
    Login: LoginScreenParams;
    Register: RegisterScreenParams;
};
