/* eslint-disable linebreak-style */
Parse.Cloud.define('addNewTask', async request => {
  const user = request.user;
  const { title, description } = request.params;

  const Task = Parse.Object.extend('Task');
  const task = new Task();

  // eslint-disable-next-line no-useless-catch
  try {
    await task.save({
      user,
      title,
      description,
    });

    return JSON.stringify({
      status: 'created',
      message: 'Task added successfully',
    });
  } catch (error) {
    throw error;
  }
});
