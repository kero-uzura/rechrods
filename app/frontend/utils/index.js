import * as br from "./browser-dependencies"

export const zeroPadding = (num, length) => {
  const zeros = Array(length + 1).join('0')
  return (zeros + num).slice(-length);
}

export const parseDate = (dateString) => (
  // 2017-01-29T00:13:31.000+09:00
  new Date(Date.parse(dateString))
)
export const humanDateTime = (dateString, full = false) => {
  const date = parseDate(dateString)
  const yyyy = zeroPadding(date.getFullYear(),  4)
  const MM   = zeroPadding(date.getMonth() + 1, 2)
  const dd   = zeroPadding(date.getDate(),      2)
  const hh   = zeroPadding(date.getHours(),     2)
  const mm   = zeroPadding(date.getMinutes(),   2)
  const ss   = zeroPadding(date.getSeconds(),   2)

  if (full) {
    return `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}`
  } else {
    return `${yyyy}/${MM}/${dd}`
  }
}

export const valueInRange = (value, min, max) => {
  if (value < min) return min
  if (max < value) return max
  return value
}

export const barLength = (score) => (
  parseInt(score[score.length - 2].time.split(":")[0], 10) // fin の直前の小節
)

export const protocol = () => (/^https:/.test(br.location.href) ? "https" : "http")
export const sharedUrl = (url) => `${protocol()}://${br.location.host}/${url}`

export const pushUrl = (url, title) => {
  const { document, history } = br
  if (title) document.title = `${title} | rechord`
  history.pushState(null, null, url)
}
export const transitionUrl = (url) => {
  br.location.href = url
}

export const copyToClipboard = (text) => {
  const { document } = br

  const temp = document.createElement("div")
  temp.appendChild(document.createElement("pre")).textContent = text

  const { style } = temp
  style.position = "fixed"
  style.left     = "-100%"

  document.body.appendChild(temp)
  document.getSelection().selectAllChildren(temp)

  const result = document.execCommand("copy")

  document.body.removeChild(temp)
  return result
}
