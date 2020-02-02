import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    // @Matches(/^[a-zA-Z0-9]{5,20}$/, { message: 'Password too weak' })
    password: string;
}
