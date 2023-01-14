import {MatchType, Referee_Stage} from "@/proto/ssl_gc_referee_message";
import {Command_Type} from "@/proto/ssl_gc_state";
import {GameEvent_Type} from "@/proto/ssl_gc_game_event";

export const stageNames = new Map<Referee_Stage, string>([
  [Referee_Stage.NORMAL_FIRST_HALF_PRE, 'Pre-First Half'],
  [Referee_Stage.NORMAL_FIRST_HALF, 'First Half'],
  [Referee_Stage.NORMAL_HALF_TIME, 'Half Time'],
  [Referee_Stage.NORMAL_SECOND_HALF_PRE, 'Pre-Second Half'],
  [Referee_Stage.NORMAL_SECOND_HALF, 'Second Half'],
  [Referee_Stage.EXTRA_TIME_BREAK, 'Overtime Break'],
  [Referee_Stage.EXTRA_FIRST_HALF_PRE, 'Pre-Overtime First Half'],
  [Referee_Stage.EXTRA_FIRST_HALF, 'Overtime First Half'],
  [Referee_Stage.EXTRA_HALF_TIME, 'Overtime Half Time'],
  [Referee_Stage.EXTRA_SECOND_HALF_PRE, 'Pre-Overtime Second Half'],
  [Referee_Stage.EXTRA_SECOND_HALF, 'Overtime Second Half'],
  [Referee_Stage.PENALTY_SHOOTOUT_BREAK, 'Shootout Break'],
  [Referee_Stage.PENALTY_SHOOTOUT, 'Shootout'],
  [Referee_Stage.POST_GAME, 'End of Game'],
]);

export const commandNames = new Map<Command_Type, string>([
  [Command_Type.HALT, 'Halt'],
  [Command_Type.STOP, 'Stop'],
  [Command_Type.NORMAL_START, 'Normal Start'],
  [Command_Type.FORCE_START, 'Force Start'],
  [Command_Type.DIRECT, 'Free kick'],
  [Command_Type.KICKOFF, 'Kick-off'],
  [Command_Type.PENALTY, 'Penalty kick'],
  [Command_Type.TIMEOUT, 'Timeout'],
  [Command_Type.BALL_PLACEMENT, 'Ball Placement'],
])

export const gameEventNames = new Map<GameEvent_Type, string>([
  [GameEvent_Type.BALL_LEFT_FIELD_TOUCH_LINE, "ball left field via touch line"],
  [GameEvent_Type.BALL_LEFT_FIELD_GOAL_LINE, "ball left field via goal line"],
  [GameEvent_Type.AIMLESS_KICK, "ball kicked aimlessly"],
  [GameEvent_Type.ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA, "attacker too close to defense area"],
  [GameEvent_Type.DEFENDER_IN_DEFENSE_AREA, "defender inside own defense area"],
  [GameEvent_Type.BOUNDARY_CROSSING, "ball chipped over field boundaries"],
  [GameEvent_Type.KEEPER_HELD_BALL, "ball held deliberately by keeper"],
  [GameEvent_Type.BOT_DRIBBLED_BALL_TOO_FAR, "ball dribbled too far"],
  [GameEvent_Type.BOT_PUSHED_BOT, "bot pushed opponent bot"],
  [GameEvent_Type.BOT_HELD_BALL_DELIBERATELY, "ball held deliberately by bot"],
  [GameEvent_Type.BOT_TIPPED_OVER, "bot tipped over"],
  [GameEvent_Type.ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA, "attacker touched ball inside opponent defense area"],
  [GameEvent_Type.BOT_KICKED_BALL_TOO_FAST, "ball kicked too fast"],
  [GameEvent_Type.BOT_CRASH_UNIQUE, "bot crashed into opponent bot"],
  [GameEvent_Type.BOT_CRASH_DRAWN, "bots crashed into each other"],
  [GameEvent_Type.DEFENDER_TOO_CLOSE_TO_KICK_POINT, "defender too close to kick point"],
  [GameEvent_Type.BOT_TOO_FAST_IN_STOP, "bot too fast in stop"],
  [GameEvent_Type.BOT_INTERFERED_PLACEMENT, "bot interfered ball placement"],
  [GameEvent_Type.POSSIBLE_GOAL, "goal might been scored"],
  [GameEvent_Type.GOAL, "goal scored"],
  [GameEvent_Type.INVALID_GOAL, "goal invalid"],
  [GameEvent_Type.ATTACKER_DOUBLE_TOUCHED_BALL, "ball touched twice by attacker"],
  [GameEvent_Type.PLACEMENT_SUCCEEDED, "ball placement succeeded"],
  [GameEvent_Type.PENALTY_KICK_FAILED, "penalty kick failed"],
  [GameEvent_Type.NO_PROGRESS_IN_GAME, "no progress in game"],
  [GameEvent_Type.PLACEMENT_FAILED, "ball placement failed"],
  [GameEvent_Type.MULTIPLE_CARDS, "multiple cards"],
  [GameEvent_Type.MULTIPLE_FOULS, "multiple fouls"],
  [GameEvent_Type.BOT_SUBSTITUTION, "bot substitution"],
  [GameEvent_Type.TOO_MANY_ROBOTS, "too many bots on field"],
  [GameEvent_Type.CHALLENGE_FLAG, "challenge flag"],
  [GameEvent_Type.EMERGENCY_STOP, "emergency stop"],
  [GameEvent_Type.UNSPORTING_BEHAVIOR_MINOR, "unsporting behavior (minor)"],
  [GameEvent_Type.UNSPORTING_BEHAVIOR_MAJOR, "unsporting behavior (major)"],
])

export const matchTypeNames = new Map<MatchType, string>([
  [MatchType.UNKNOWN_MATCH, "Unknown"],
  [MatchType.UNRECOGNIZED, "Unknown"],
  [MatchType.GROUP_PHASE, "Group Phase"],
  [MatchType.ELIMINATION_PHASE, "Elimination Phase"],
  [MatchType.FRIENDLY, "Friendly"],
])
