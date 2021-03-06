exports.add = (a, b) => a + b;

exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => callback(a + b), 1000);
};

exports.square = x => x * x

exports.asyncSquare = (x, callback) => {
  setTimeout(() => callback(x * x), 1000);
}

exports.setName = (user, fullName) => {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};