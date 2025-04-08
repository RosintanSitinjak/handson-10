/* eslint-disable prettier/prettier */
export class JwtPayloadDTO {
    sub: number;
    email: string;
    iat?: number;
    exp?: number;
}