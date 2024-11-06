import { userSessions } from './session.js';

// 유저 객체를 유저 세션에 추가
export const addUser = (user) => {
  userSessions.push(user);
  return user;
};

export const getUserByUserId = (userId) => {
  return userSessions.find((user) => user.userId === userId);
};

export const removeUser = async (socket) => {
  const index = userSessions.findIndex((user) => user.socket === socket);
  if (index != -1) {
    return userSessions.splice(index, 1)[0];
  }
};

export const getUserBySocket = (socket) => {
  const user = userSessions.find((user) => user.socket === socket);
  if (!user) {
    console.error('User not found : getUserBySocket');
  }
  return user;
};

export const getUserSessions = () => {
  return userSessions;
};