import { outputSpeakerDeviceLabels } from "@/services/config"
import getDeviceFunction from "@/services/mediaDevices/utils"

const getOutputSpeakerDevice = getDeviceFunction(
  "audiooutput",
  outputSpeakerDeviceLabels
)
export default getOutputSpeakerDevice
