import { User } from "src/user/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

export enum ProviderType {
  CREDENTIALS = "credentials",
  GOOGLE = "google",
  GITHUB = "github",
}

export enum AccountType {
  PERSONAL = "personal",
  BUSINESS = "business",
}

@Entity()
export class Account {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column()
  providerAccountId: string;

  @Column({
    type: "enum",
    enum: ProviderType,
    default: ProviderType.CREDENTIALS,
  })
  provider: ProviderType;

  @Column()
  passwordHash: string;

  @Column({ nullable: true })
  accessToken?: string;

  @Column({ nullable: true })
  refreshToken?: string;

  @Column({ nullable: true })
  accessTokenExpiresAt?: Date;

  @Column({ nullable: true })
  refreshTokenExpiresAt?: Date;

  @Column({
    type: "enum",
    enum: AccountType,
    default: AccountType.PERSONAL,
  })
  accountType: AccountType;
}
