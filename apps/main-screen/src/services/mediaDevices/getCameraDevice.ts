import { cameraDeviceLabels } from "@/services/config"
import getDeviceFunction from "@/services/mediaDevices/utils"

const getCameraDevice = getDeviceFunction("videoinput", cameraDeviceLabels)
export default getCameraDevice
