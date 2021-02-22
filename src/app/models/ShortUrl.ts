import {
    BaseEntity,
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Double,
    OneToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";

export enum TypeAccountRole {
    C = "C",
    P = "P",
}

@Entity('accounts')
export default class ShortUrl extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({type: 'numeric', name: 'people_id'})
    public peopleId: number;

    @Column({type: 'double'})
    public balance: number;

    @Column({type: 'numeric', name: 'daily_summary_limit'})
    public dailySummaryLimit: number;

    @Column({type: 'boolean', name: 'active_flag'})
    public activeFlag: boolean;

    @Column({type: 'enum', enum: TypeAccountRole, name: 'type_account'})
    public typeAccount: TypeAccountRole;

    @Column({type: 'date', name:'date_birthday'})
    public dateBirthday: Date;

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    public deletedAt: Date;
}