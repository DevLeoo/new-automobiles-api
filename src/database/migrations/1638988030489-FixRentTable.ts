import {MigrationInterface, QueryRunner} from "typeorm";

export class FixRentTable1638988030489 implements MigrationInterface {
    name = 'FixRentTable1638988030489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rent\` DROP COLUMN \`car\``);
        await queryRunner.query(`ALTER TABLE \`rent\` ADD \`automobile\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rent\` CHANGE \`id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rent\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`rent\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`rent\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rent\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`rent\` ADD \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`rent\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`rent\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`rent\` DROP COLUMN \`automobile\``);
        await queryRunner.query(`ALTER TABLE \`rent\` ADD \`car\` varchar(255) NOT NULL`);
    }

}
