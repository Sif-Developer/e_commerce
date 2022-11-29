'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Mufasa',
        email: 'mufasa@example.com',
        password: '123456',
        address: 'Street 7',
        phone: '662587799',
        image: '',      
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Simba',
        email: 'simba@example.com',
        password: '147258',
        address: 'Street 8',
        phone: '662587449',
        image: '', 
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Nala',
        email: 'nala@example.com',
        password: '258369',
        address: 'Street 12',
        phone: '662587799',
        image: '', 
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Sarabi',
        email: 'sarabi@example.com',
        password: '456789',
        address: 'Street 4',
        phone: '662586669',
        image: '', 
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Zazu',
        email: 'zazu@example.com',
        password: '147369',
        address: 'Street 8',
        phone: '662587799',
        image: '', 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
  }
};
