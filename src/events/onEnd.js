import { exitGameSession } from '../sessions/game_session.js';
import { removeUser } from '../sessions/user_session.js';

export const onEnd = (socket) => () => {
  // 소켓 종료 시 수행해야 할 함수 추가
  exitGameSession(socket);
  removeUser(socket);
};
