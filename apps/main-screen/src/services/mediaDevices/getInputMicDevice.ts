const inputMicDeviceLabels: string[] = [
  "Polycom Studio Audio",
  "Réseau de microphones",
]

const getInputMicDevice = async (): Promise<MediaDeviceInfo | undefined> => {
  const mediaDevices = await navigator.mediaDevices.enumerateDevices()
  const inputAudioMediaDevices = mediaDevices.filter(
    (device) => device.kind === "audioinput"
  )
  // eslint-disable-next-line no-restricted-syntax
  for (const micLabel of inputMicDeviceLabels) {
    const micDevice = inputAudioMediaDevices.find((device) =>
      device.label.includes(micLabel)
    )
    if (micDevice !== undefined) {
      return micDevice
    }
  }
  return undefined
}
export default getInputMicDevice
