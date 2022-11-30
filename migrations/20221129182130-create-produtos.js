'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      produto: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'categorias'
          },
          key: 'id',
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos')
  }
};
