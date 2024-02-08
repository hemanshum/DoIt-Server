/* eslint-disable linebreak-style */
Parse.Cloud.define('resetPassword', async request => {

  const currentUser = request.user;
  const { password, newPassword } = request.params;

  // eslint-disable-next-line no-useless-catch
  try {
    const user = await Parse.User.logIn(currentUser.getUsername(), password);
    user.set("password", newPassword);
    await user.save(null, { useMasterKey: true });
    return JSON.stringify({
      status: 'password updated',
      message: 'Your password has been updated, Please Login again...',
    });
  } catch (error) {
    throw error;
  }

});
