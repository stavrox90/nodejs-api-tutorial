
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, title: 'first task', description: 'lorem ipsum'},
        {id: 2, title: 'second task', description: 'cyka'},
        {id: 3, title: 'third task', description: 'blyat'},
      ]);
    });
};
