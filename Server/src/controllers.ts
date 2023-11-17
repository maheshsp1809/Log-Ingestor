import { getUsersService, createUserService } from './services';

export const getUsers = (req, res) => {
  const users = getUsersService();

  res.json(users);
}

export const createUser = (req, res) => {
  const user = createUserService(req.body);

  res.json(user);
}