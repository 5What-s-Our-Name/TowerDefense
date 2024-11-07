import { initialGameState } from '../../assets/init.js';
import { uuid } from '../../utils/util/uuid.js';

class User {
  constructor(socket, userId) {
    this.socket = socket;
    // 소켓을 담을 변수
    this.userId = userId;
    // 유저의 아이디를 담을 변수
    this.sequence = 0;
    /*
     유저 고유의 시퀀스
     유저 고유의 시퀀스가 필요한 이유는

     서버와 클라이언트 2명이 통신할 때
     같은 시퀀스 번호를 공유해서 사용하면


     1. 네트워크의 특성상 데이터 손실, 중복 또는 순서 변경이 발생할 수 있습니다.
        클라이언트가 보낸 데이터가 온전히 도착하지 못하거나 순서가 틀어지는 경우,
        서버는 sequence 번호를 통해 데이터의 무결성을 확인할 수 있습니다

     2. 여러 클라이언트가 동시에 서버에 접속하여 요청을 보낼 때,
        클라이언트별로 별도의 상태를 유지해야 할 때가 많습니다.
        클라이언트별 sequence 번호를 통해 서버는 각 클라이언트의
        상태를 식별하고 관리할 수 있습니다.(구글 참조)
    */
    this.towerId = 0;
    this.gold = 2000;

    this.towerList = [];
  }

  // addTower(x, y) {
  //   const towerId = uuid();
  //   this.tower.push({ towerId, x, y });
  //   return towerId;
  // }

  // 구매에 따른 해당 유저 타워 리스트에 타워 추가
  // addTower(tower) {
  //   this.towerList.push(tower);
  // }
  addTower(x, y) {
    initialGameState.initialGold -= initialGameState.towerCost
    this.towerId++;
    this.towerList.push({ towerId: this.towerId, x, y });
    return this.towerId;
  }

  //  유저가 가지고 있는 전체 타워 리스트 반환
  getTowerList() {
    return this.towerList;
  }

  // 타워 Id를 바탕으로 해당 타워(Tower Class Instance) 반환
  getTower(towerId) {
    return this.towerList.find((tower) => tower.towerId === towerId);
  }

  getSocket() {
    return this.socket;
    // 유저의 소켓 반환
  }

  getUserId() {
    return this.userId;
    // 유저의 아이디 반환
  }

  getNextSequence() {
    return ++this.sequence;
    // 서버는 클라이언트의 시퀀스를 수신하고
    // 다음(++) 시퀀스를 클라이언트에 보내
    // 정상 수신 및 다음 정보를 요청 합니다.
    // 그에 필요한 TCP 통신에 필요한 시퀀스 입니다.

    // 그리고 우리는 서버이기 때문에 ++로 정상 수신을
    // 클라이언트에게 알리고, 다음 요청을 보내는 것 입니다.
  }
}

export default User;
