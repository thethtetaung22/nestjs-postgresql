// base.entity.ts
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryColumn('varchar', {length: 100})
    id: string;

    @Column('varchar', { length: 300 })
    name: string;

    @Column('numeric')
    age: number;
}