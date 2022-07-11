const OutputSpeakerDeviceLabels: string[] = [
  "Polycom Studio Audio",
  "Par défaut",
]

const getOutputSpeakerDevice = async (): Promise<
  MediaDeviceInfo | undefined
> => {
  const mediaDevices = await navigator.mediaDevices.enumerateDevices()
  const outputAudioMediaDevices = mediaDevices.filter(
    (device) => device.kind === "audiooutput"
  )
  // eslint-disable-next-line no-restricted-syntax
  for (const speakerLabel of OutputSpeakerDeviceLabels) {
    const speakerDevice = outputAudioMediaDevices.find((device) =>
      device.label.includes(speakerLabel)
    )
    if (speakerDevice !== undefined) {
      return speakerDevice
    }
  }
  return undefined
}
export default getOutputSpeakerDevice
