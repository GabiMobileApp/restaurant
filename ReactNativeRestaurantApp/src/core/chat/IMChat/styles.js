import { StyleSheet, Dimensions, Platform } from 'react-native'
import { size } from '../../../core/helpers/devices'

export const WINDOW_WIDTH = Dimensions.get('window').width
export const WINDOW_HEIGHT = Dimensions.get('window').height

const dynamicStyles = (theme, appearance, outBound) => {
  const colorSet = theme.colors[appearance]
  const themeSize = theme.fontSizes
  const chatBackgroundColor = colorSet.primaryBackground
  const audioPlayPauseContainerSize = 24
  const audioPlayIconSize = Platform.OS !== 'web' ? 15 : 18
  const reactionIconSize = Math.floor(WINDOW_WIDTH * 0.09)
  const threadReactionIconSize =
    Platform.OS === 'web' ? 15 : Math.floor(WINDOW_WIDTH * 0.055)
  const storyReactionStickerSize = Math.floor(WINDOW_WIDTH * 0.1)

  return StyleSheet.create({
    safeAreaViewContainer: {
      backgroundColor: chatBackgroundColor,
      flex: 1,
      marginBottom: 5,
    },
    personalChatContainer: {
      backgroundColor: chatBackgroundColor,
      flex: 1,
    },
    //Bottom Input
    bottomContentContainer: {
      backgroundColor: chatBackgroundColor,
      marginBottom: 16,
    },
    inputContainer: {
      flex: 8,
      borderRadius: 20,
      backgroundColor: colorSet.grey0,
      flexDirection: 'row',
      overflow: 'hidden',
      marginLeft: 8,
      marginVertical: 16,
    },
    micIconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      backgroundColor: 'transparent',
    },
    leftIcons: {
      ...Platform.select({
        native: {
          width: 55,
        },
      }),
      flexDirection: 'row',
    },
    inputBar: {
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: colorSet.hairline,
      backgroundColor: colorSet.primaryBackground,
      flexDirection: 'row',
    },
    inputIconContainer: {
      margin: 10,
      flex: 0.5,
    },
    inputIcon: {
      tintColor: colorSet.primaryForeground,
      width: 25,
      height: 25,
    },
    micIcon: {
      tintColor: colorSet.primaryForeground,
      width: 17,
      height: 17,
    },
    input: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 5,
      paddingLeft: 3,
      paddingRight: 20,
      width: '93%',
      fontSize: 16,
      lineHeight: 22,
      color: colorSet.primaryText,
      flex: 1,
    },
    inReplyToView: {
      backgroundColor: colorSet.primaryBackground,
      borderTopWidth: 1,
      borderTopColor: colorSet.hairline,
      padding: 8,
    },
    replyingToHeaderText: {
      fontSize: 13,
      color: colorSet.primaryText,
      marginBottom: 4,
    },
    replyingToNameText: {
      fontWeight: 'bold',
    },
    replyingToContentText: {
      fontSize: 12,
      color: colorSet.grey9,
    },
    replyingToCloseButton: {
      position: 'absolute',
      right: 0,
      top: 2,
    },
    replyingToCloseIcon: {
      width: 25,
      height: 25,
      tintColor: colorSet.grey9,
    },
    // Message Thread
    nonkeyboardContainer: {},
    messageContentThreadContainer: {
      margin: 6,
    },
    messageThreadContainer: {
      marginBottom: 24,
    },
    // Thread Item
    sendItemContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flexDirection: 'row',
      marginBottom: 25,
    },
    itemContent: {
      padding: 10,
      backgroundColor: colorSet.hairline,
      borderRadius: 10,
    },
    indicatorContainer: {
      width: '100%',
    },
    typingIndicatorContainer: {
      backgroundColor: colorSet.hairline,
      borderRadius: 17,
      height: 40,
      width: '17%',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '3%',
      marginBottom: '2%',
      marginVertical: 4,
    },
    indicatorDotContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    typingIndicatorContentSupport: {
      position: 'absolute',
      bottom: '13%',
      left: '2.6%',
      height: 15,
      width: 15,
      borderRadius: 7.5,
      backgroundColor: colorSet.hairline,
      zIndex: -1,
    },
    typingIndicatorSupport: {
      position: 'absolute',
      bottom: '1%',
      left: '1%',
      height: 8,
      width: 8,
      borderRadius: 4,
      backgroundColor: colorSet.hairline,
    },
    sendItemContent: {
      marginRight: 9,
      backgroundColor: colorSet.primaryForeground,
    },
    mediaMessage: {
      width: size(300),
      height: size(250),
      borderRadius: 10,
    },
    boederImgSend: {
      position: 'absolute',
      width: size(300),
      height: size(250),
      resizeMode: 'stretch',
      tintColor: chatBackgroundColor,
    },
    textBoederImgSend: {
      position: 'absolute',
      right: -5,
      bottom: 0,
      width: 20,
      height: 8,
      resizeMode: 'stretch',
      tintColor: colorSet.primaryForeground,
    },
    sendTextMessage: {
      fontSize: 16,
      color: colorSet.primaryBackground,
    },
    userIcon: {
      width: 34,
      height: 34,
      borderRadius: 17,
    },
    facePileContainer: {
      marginLeft: 13,
      flexDirection: 'row-reverse',
      flexWrap: 'nowrap',
      overflow: 'visible',
    },
    facePileCircleImage: {
      borderWidth: 2,
      borderColor: colorSet.primaryBackground,
    },
    facePileOverflow: {
      backgroundColor: '#b6c0ca',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 18,
    },
    facePileOverflowLabel: {
      color: colorSet.primaryText,
      fontSize: 14,
      letterSpacing: -1,
      marginLeft: 3,
      fontWeight: 'bold',
    },
    receiveItemContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      flexDirection: 'row',
      marginBottom: 25,
    },
    receiveItemContent: {
      marginLeft: 9,
    },
    boederImgReceive: {
      position: 'absolute',
      width: size(300),
      height: size(250),
      resizeMode: 'stretch',
      tintColor: chatBackgroundColor,
    },
    receiveTextMessage: {
      color: colorSet.primaryText,
      fontSize: 16,
    },
    textBoederImgReceive: {
      position: 'absolute',
      left: -5,
      bottom: 0,
      width: 20,
      height: 8,
      resizeMode: 'stretch',
      tintColor: colorSet.hairline,
    },
    mediaVideoLoader: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    centerItem: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    playButton: {
      position: 'absolute',
      top: '40%',
      alignSelf: 'center',
      width: 38,
      height: 38,
      overflow: 'hidden',
    },
    myMessageBubbleContainerView: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flexDirection: 'column',
      maxWidth: '80%',
    },
    theirMessageBubbleContainerView: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
      maxWidth: '80%',
    },
    inReplyToItemContainerView: {
      overflow: 'hidden',
      flex: 1,
      marginBottom: -20,
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    inReplyToTheirItemContainerView: {
      overflow: 'hidden',
      flex: 1,
      marginBottom: -20,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    inReplyToItemHeaderView: {
      flexDirection: 'row',
      marginTop: 15,
      marginRight: 10,
    },
    inReplyToIcon: {
      width: 12,
      height: 12,
      marginRight: 5,
      tintColor: colorSet.grey9,
      marginTop: 1,
      marginLeft: 10,
    },
    inReplyToHeaderText: {
      fontSize: 12,
      color: colorSet.grey9,
      marginBottom: 5,
    },
    inReplyToItemBubbleView: {
      borderRadius: 15,
      backgroundColor: colorSet.grey3,
      paddingBottom: 30,
      paddingLeft: 15,
      paddingRight: 10,
      paddingTop: 5,
      overflow: 'hidden',
      flex: 1,
    },
    inReplyToItemBubbleText: {
      color: colorSet.grey9,
      fontSize: 14,
    },
    inReplyToStoryContainer: {
      flex: 1,
      marginBottom: 10,
      marginLeft: 10,
    },
    inReplyToTheirStoryContainer: {
      flex: 1,
      marginBottom: 10,
      marginRight: 10,
    },
    threadItemActionSheetContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '10%',
      width: '100%',
      ...Platform.select({
        ios: {
          position: 'absolute',
          bottom: 0,
        },
        android: {
          marginTop: '6%',
        },
      }),
    },
    threadItemActionSheetOptionsText: {
      color: colorSet.primaryForeground,
      fontSize: themeSize.m,
    },
    threadReactionContainer: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
    reactionContainer: {
      flexDirection: 'row',
      backgroundColor: colorSet.primaryBackground,
      width: Math.floor(WINDOW_WIDTH * 0.68),
      height: 48,
      borderRadius: Math.floor(WINDOW_WIDTH * 0.07),
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 2,
    },
    reactionIconContainer: {
      margin: 3,
      padding: 0,
      backgroundColor: 'powderblue',
      width: reactionIconSize,
      height: reactionIconSize,
      borderRadius: reactionIconSize / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    reactionIcon: {
      width: reactionIconSize,
      height: reactionIconSize,
      margin: 0,
    },
    storyReactionStickerContainer: {
      margin: 3,
      padding: 0,
      backgroundColor: 'powderblue',
      width: storyReactionStickerSize,
      height: storyReactionStickerSize,
      borderRadius: storyReactionStickerSize / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    threadReactionIconContainer: {
      margin: 3,
      padding: 0,
      backgroundColor: 'powderblue',
      width: threadReactionIconSize,
      height: threadReactionIconSize,
      borderRadius: threadReactionIconSize / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    threadReactionIcon: {
      width: threadReactionIconSize,
      height: threadReactionIconSize,
      margin: 0,
    },
    storyReactionSticker: {
      width: storyReactionStickerSize,
      height: storyReactionStickerSize,
      margin: 0,
    },
    threadItemReactionContainer: {
      position: 'absolute',
      bottom: -20,
      right: 6,
      padding: 1,
      borderRadius: 10,
      backgroundColor: colorSet.grey0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    threadItemReactionsCountText: {
      color: colorSet.primaryText,
    },
    // Bottom Audio Recorder
    recorderContainer: {
      backgroundColor: colorSet.primaryBackground,
      paddingBottom: 16,
      height: Math.floor(WINDOW_HEIGHT * 0.35),
    },
    counterContainer: {
      flex: 8,
      backgroundColor: colorSet.primaryBackground,
      justifyContent: 'center',
      alignItems: 'center',
    },
    counterText: {
      fontSize: 14,
      color: colorSet.primaryText,
    },
    recorderButtonsContainer: {
      flex: 1.8,
      paddingHorizontal: 5,
      paddingBottom: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    recorderButtonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    recorderControlButton: {
      backgroundColor: '#aaaaaa',
      width: '96%',
      height: 38,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    butonAlternateColor: {
      backgroundColor: '#f9272a',
    },
    recoderControlText: {
      fontSize: 16,
      color: colorSet.grey0,
    },
    missedCallMessageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    missedCallText: {
      fontSize: themeSize.m,
    },

    // Audio media thread item
    audioMediaThreadItemContainer: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'center',
      width: Math.floor(WINDOW_WIDTH * 0.46),
      padding: 9,
    },
    audioPlayPauseIconContainer: {
      flex: 2,
      justifyContent: 'center',
      zIndex: 9,
    },
    playPauseIconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: outBound ? colorSet.hairline : colorSet.primaryForeground,
      height: audioPlayPauseContainerSize,
      width: audioPlayPauseContainerSize,
      borderRadius: Math.floor(audioPlayPauseContainerSize / 2),
    },
    audioMeterContainer: {
      flex: 6.5,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    audioMeter: {
      width: '95%',
      height: 6,
      paddingLeft: 7,
    },
    audioMeterThumb: {
      width: 9,
      height: 9,
    },
    audioTimerContainer: {
      flex: 2.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    audioPlayIcon: {
      width: audioPlayIconSize,
      height: audioPlayIconSize,
      tintColor: outBound ? colorSet.hairline : colorSet.primaryForeground,
    },
    audioTimerCount: {
      color: outBound ? colorSet.hairline : colorSet.primaryForeground,
      fontSize: 12,
    },
    minimumAudioTrackTintColor: {
      color: outBound ? colorSet.hairline : colorSet.primaryForeground,
    },
    audioThumbTintColor: {
      color: outBound ? colorSet.hairline : colorSet.primaryForeground,
    },

    //file thread item
    bodyContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 9,
    },
    icon: {
      height: 37,
      width: 37,
      tintColor: outBound ? colorSet.hairline : colorSet.primaryForeground,
    },
    title: {
      fontSize: 16,
      fontWeight: '400',
      padding: 3,
      color: outBound ? colorSet.hairline : colorSet.primaryForeground,
    },
    detailContainer: {
      flexDirection: 'row',
    },
    detail: {
      fontSize: 12,
      fontWeight: '300',
      padding: 3,
      color: outBound ? colorSet.hairline : colorSet.primaryForeground,
    },

    // Forward Message Modal
    modal: {
      margin: 0,
    },
    forwardMessageMainContainer: {
      flex: 1,
      marginTop: '20%',
      backgroundColor: colorSet.primaryBackground,
    },
    conversationViewContainer: {
      padding: 10,
      flexDirection: 'row',
      marginBottom: 20,
    },
    conversationIconContainer: {
      flex: 6,
      flexDirection: 'row',
      alignItems: 'center',
    },
    conversationTitle: {
      color: colorSet.primaryText,
      fontSize: 16,
      fontWeight: '500',
      marginLeft: 10,
    },
    sendFlexContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sendButton: {
      width: 82,
      height: 30,
      justifyContent: 'center',
      borderRadius: 6,
      backgroundColor: colorSet.primaryForeground,
      marginRight: 18,
      color: colorSet.grey0,
    },
    actionTitle: {
      padding: 0,
      alignSelf: 'center',
      fontSize: 14,
      fontWeight: '500',
      color: colorSet.primaryText,
    },
    disabledSendButton: {
      width: 82,
      height: 26,
      justifyContent: 'center',
      borderRadius: 12,
      backgroundColor: colorSet.grey3,
      marginRight: 25,
    },
    divider: {
      bottom: 0,
      left: 80,
      right: 10,
      position: 'absolute',
      height: 0.5,
      backgroundColor: colorSet.hairline,
    },
    disabledActionTitle: {
      alignSelf: 'center',
      fontSize: 14,
      fontWeight: '500',
      color: colorSet.primaryText,
    },
    emptyViewContainer: {
      marginTop: WINDOW_HEIGHT / 6,
    },
  })
}

export default dynamicStyles
