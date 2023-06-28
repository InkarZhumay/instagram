'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bio: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      website_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      // roleId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   referrences: {
      //     model: 'Roles',
      //     key: 'id'
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE'
      // },
      // companyId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: true,
      //   referrences: {
      //     model: 'Companies',
      //     key: 'id'
      //   },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};