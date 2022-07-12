const getDeviceFunction =
  (
    kind: MediaDeviceKind,
    validLabels: string[]
  ): (() => Promise<MediaDeviceInfo | undefined>) =>
  async () => {
    // Prompts the user for permission to use the video and audio feeds so that enumrateDevices can return all devices and their info
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    const mediaDevices = await navigator.mediaDevices.enumerateDevices()
    const filteredMediaDevices = mediaDevices.filter(
      (device) => device.kind === kind
    )
    // eslint-disable-next-line no-restricted-syntax
    for (const label of validLabels) {
      const validDevice = filteredMediaDevices.find((device) =>
        device.label.includes(label)
      )
      if (validDevice !== undefined) {
        return validDevice
      }
    }
    return undefined
  }
export default getDeviceFunction
