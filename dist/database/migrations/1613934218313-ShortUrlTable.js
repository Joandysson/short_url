"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortUrlTable1613934218313 = void 0;

var _typeorm = require("typeorm");

class ShortUrlTable1613934218313 {
  table = "shorturls";

  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: this.table,
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        generationStrategy: "increment",
        isGenerated: true
      }, {
        name: "url",
        type: "varchar"
      }, {
        name: "redirect",
        type: "varchar"
      }, {
        name: "code",
        type: "varchar",
        length: "10"
      }, {
        name: "created_at",
        type: "timestamp",
        default: 'NOW()'
      }, {
        name: "updated_at",
        type: "timestamp",
        default: 'NOW()'
      }, {
        name: "deleted_at",
        type: "timestamp",
        isNullable: true
      }]
    }), true);
  }

  async down(queryRunner) {
    await queryRunner.dropTable(this.table);
  }

}

exports.ShortUrlTable1613934218313 = ShortUrlTable1613934218313;