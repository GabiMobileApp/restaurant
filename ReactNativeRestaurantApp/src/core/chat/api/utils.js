import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { getUnixTimeStamp } from '../../helpers/timeFormat'

export const hydrateMessagesWithMyReactions = (messages, userID) => {
  return messages?.map(message => {
    const myReaction = getMyReaction(message.reactions, userID)
    return myReaction ? { ...message, myReaction } : message
  })
}

const getMyReaction = (reactionsDict, userID) => {
  const reactionKeys = [
    'like',
    'love',
    'laugh',
    'angry',
    'surprised',
    'cry',
    'sad',
  ]
  var result = null
  reactionKeys.forEach(reactionKey => {
    if (
      reactionsDict &&
      reactionsDict[reactionKey] &&
      reactionsDict[reactionKey].includes(userID)
    ) {
      result = reactionKey
    }
  })

  return result
}

export const getMessageObject = (
  sender,
  message,
  media,
  inReplyToItem,
  forwardMessage = false,
  inReplyToStory = false,
  story = null,
) => {
  const { profilePictureURL, profilePictureKey } = sender
  const userID = sender.id
  const timestamp = getUnixTimeStamp()

  const messageID = uuid()

  return {
    ...message,
    id: messageID,
    createdAt: timestamp,
    senderFirstName: sender.firstName || sender.fullname,
    senderUsername: sender.username || sender.firstName,
    senderID: userID,
    senderLastName: '',
    senderProfilePictureURL: profilePictureURL,
    media: media,
    inReplyToItem: inReplyToItem,
    inReplyToStory,
    story: story,
    readUserIDs: [userID],
    forwardMessage,
    ...(profilePictureKey
      ? { senderProfilePictureKey: profilePictureKey }
      : {}),
  }
}
