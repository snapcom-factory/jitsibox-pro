import { shareDeviceLabels } from "@/services/config"
import getDeviceFunction from "@/services/mediaDevices/utils"

const getShareDevice = getDeviceFunction("videoinput", shareDeviceLabels)
export default getShareDevice
