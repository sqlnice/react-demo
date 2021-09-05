function formatName(user) {
  return user.firstName + '' + user.lastName;
}
const user = {
  firstName: 'Felix',
  lastName: 'Ho',
};
const element = <h1>Hello,{formatName(user)}</h1>;

export default element;
