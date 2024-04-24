import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async generateJwt(user: User) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
