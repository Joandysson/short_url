import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ShortUrlTable1613934218313 implements MigrationInterface {
    private table = "shorturl"
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.table,
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "url",
                    type: "varchar",
                },
                {
                    name: "code",
                    type: "varchar",
                    length: "10"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: 'NOW()'
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: 'NOW()'
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
