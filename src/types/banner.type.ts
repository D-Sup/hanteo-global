import { EventVoteType } from "./eventVote.type"
import { NoticeType } from "./notice.type"

export interface BannerType {
  targetIds: string[]
  targetDetails: (EventVoteType | NoticeType)[]
}
