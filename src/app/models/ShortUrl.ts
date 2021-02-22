import {
    BaseEntity,
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from "typeorm";

@Entity('shorturls')
export default class ShortUrl extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({type: 'varchar'})
    public url: string;

    @Column({type: 'varchar'})
    public redirect: string;

    @Column({type: 'varchar'})
    public code: string;

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    public deletedAt: Date;
}