/* eslint-disable linebreak-style */
Parse.Cloud.define('removeTask', async request => {

  // const user = request.user;
  const { taskId } = request.params;


  const Task = Parse.Object.extend('Task');
  const taskQuery = new Parse.Query(Task);

  taskQuery.equalTo('objectId', taskId);
  const result = await taskQuery.first();

  // eslint-disable-next-line no-useless-catch
  try {
    await result.destroy();
    return JSON.stringify({
      status: 'removed',
      message: `Task "${result.get("title")}" successfully deleted!`
    });
  } catch (error) {
    throw error;
  }

  // myObject.destroy()

  // object.save({ key: value }, {
  //   success: function (object) {
  //     // the object was saved.
  //   },
  //   error: function (object, error) {
  //     // saving the object failed.
  //   }
  // });

})
