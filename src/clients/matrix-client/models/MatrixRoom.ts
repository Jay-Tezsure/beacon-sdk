import {
  MatrixJoinedRoomResponse,
  MatrixInvitedRoomResponse,
  MatrixLeftRoomResponse
} from '../http/response/MatrixSyncResponse'

export enum MatrixRoomStatus {
  UNKNOWN,
  JOINED,
  INVITED,
  LEFT
}

export class MatrixRoom {
  public static from(roomOrId: string | MatrixRoom): MatrixRoom {
    return roomOrId instanceof MatrixRoom
      ? roomOrId
      : new MatrixRoom(roomOrId, MatrixRoomStatus.UNKNOWN)
  }

  public static fromJoined(id: string, _joined: MatrixJoinedRoomResponse): MatrixRoom {
    return new MatrixRoom(id, MatrixRoomStatus.JOINED)
  }

  public static fromInvited(id: string, _invited: MatrixInvitedRoomResponse): MatrixRoom {
    return new MatrixRoom(id, MatrixRoomStatus.INVITED)
  }

  public static fromLeft(id: string, _left: MatrixLeftRoomResponse): MatrixRoom {
    return new MatrixRoom(id, MatrixRoomStatus.LEFT)
  }

  constructor(readonly id: string, readonly status: MatrixRoomStatus) {}
}
