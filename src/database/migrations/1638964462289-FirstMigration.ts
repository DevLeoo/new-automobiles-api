import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1638964462289 implements MigrationInterface {
    name = 'FirstMigration1638964462289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`automobile\` (\`plate\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`color\` varchar(255) NOT NULL, PRIMARY KEY (\`plate\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`driver\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rent\` (\`id\` int NOT NULL AUTO_INCREMENT, \`car\` varchar(255) NOT NULL, \`driver\` varchar(255) NOT NULL, \`withdrawal_date\` datetime NOT NULL, \`delivery_date\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`rent\``);
        await queryRunner.query(`DROP TABLE \`driver\``);
        await queryRunner.query(`DROP TABLE \`automobile\``);
    }

}
