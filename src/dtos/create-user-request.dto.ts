export class CreateUserRequestDto {
  name: string;
  email: string;
  password: string;
  cpfCnpj: string;
  postalCode: string;
  birthDate: string;
  terms: boolean;
  affiliateId?: string;
}
