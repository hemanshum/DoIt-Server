/* eslint-disable linebreak-style */
Parse.Cloud.define('fetchUserTasks', async request => {
  const user = request.user;

  const Task = Parse.Object.extend('Task');
  const taskQuery = new Parse.Query(Task);

  // eslint-disable-next-line no-useless-catch
  try {
    taskQuery.equalTo("user", user);
    const results = await taskQuery.find();

    // Do something with the returned Parse.Object values
    const taskList = results.map((item) => {
      return {
        id: item.id,
        title: item.get('title'),
        description: item.get('description'),
        date: item.get('createdAt'),
      }
    })
    return JSON.stringify({
      status: 'success',
      taskList: taskList.reverse()
    });
  } catch (error) {
    throw error;
  }

});
