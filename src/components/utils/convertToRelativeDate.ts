const convertToRelativeDate = (data: string) => {
  const date = new Date(data)
  const now = new Date()
  const diffTime = date.getTime() - now.getTime()
  const diffMinutes = Math.ceil(diffTime / (1000 * 60))
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60))
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  let relativeDate = ""

  if (diffDays === 0) {
    if (diffHours === 0) {
      if (diffMinutes === 0) {
        relativeDate = "방금 전"
      } else {
        relativeDate = `${Math.abs(diffMinutes)}분 전`
      }
    } else {
      relativeDate = `${Math.abs(diffHours)}시간 전`
    }
  } else if (diffDays === 1) {
    relativeDate = "내일"
  } else if (diffDays === -1) {
    relativeDate = "어제"
  } else if (diffDays > 1 && diffDays < 7) {
    relativeDate = `${diffDays}일 후`
  } else if (diffDays < -1 && diffDays > -7) {
    relativeDate = `${Math.abs(diffDays)}일 전`
  } else {
    const diffWeeks = Math.floor(diffDays / 7)
    if (diffDays > 0) {
      relativeDate = `${diffWeeks}주 후`
    } else {
      relativeDate = `${Math.abs(diffWeeks)}주 전`
    }
  }
  return `${relativeDate}`
}

export default convertToRelativeDate
