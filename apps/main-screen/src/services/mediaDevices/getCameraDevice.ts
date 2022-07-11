const cameraDeviceLabels: string[] = ["Polycom Studio"]

const getCameraDevice = async (): Promise<MediaDeviceInfo | undefined> => {
  const mediaDevices = await navigator.mediaDevices.enumerateDevices()
  const videoMediaDevices = mediaDevices.filter(
    (device) => device.kind === "videoinput"
  )
  // eslint-disable-next-line no-restricted-syntax
  for (const cameraLabel of cameraDeviceLabels) {
    const cameraDevice = videoMediaDevices.find((device) =>
      device.label.includes(cameraLabel)
    )
    if (cameraDevice !== undefined) {
      return cameraDevice
    }
  }
  return undefined
}
export default getCameraDevice
