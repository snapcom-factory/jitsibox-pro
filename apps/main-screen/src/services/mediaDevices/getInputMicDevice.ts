import { inputMicDeviceLabels } from "@/services/config"
import getDeviceFunction from "@/services/mediaDevices/utils"

const getInputMicDevice = getDeviceFunction("audioinput", inputMicDeviceLabels)

export default getInputMicDevice
