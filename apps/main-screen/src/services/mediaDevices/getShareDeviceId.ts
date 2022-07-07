const shareDeviceLabels: string[] = ["Poly ULCC Video", "USB Video"]

const getShareDeviceId = async (): Promise<string | undefined> => {
  const mediaDevices = await navigator.mediaDevices.enumerateDevices()
  const videoMediaDevices = mediaDevices.filter(
    (device) => device.kind === "videoinput"
  )
  // eslint-disable-next-line no-restricted-syntax
  for (const shareLabel of shareDeviceLabels) {
    const shareDevice = videoMediaDevices.find((device) =>
      device.label.includes(shareLabel)
    )
    if (shareDevice !== undefined) {
      return shareDevice.deviceId
    }
  }
  return undefined
}
export default getShareDeviceId
