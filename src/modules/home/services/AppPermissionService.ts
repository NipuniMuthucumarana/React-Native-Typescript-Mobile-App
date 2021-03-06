import { PermissionsAndroid, Platform} from 'react-native'
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions'

const PLATFORM_LOCATION_PERMISSIONS = {
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
}

const REQUEST_PERMISSION_TYPE = {
    location: PLATFORM_LOCATION_PERMISSIONS
}

const PERMISSION_TYPE = {
    location: 'location'
}

class AppPermission {
    checkPermission = async (type: any): Promise<boolean> => {
        console.log("AppPermission checkPermission type: ", type)
        const permissions = REQUEST_PERMISSION_TYPE[type] [Platform.OS]
        console.log("AppPermission checkPermission permissions: ", permissions)
        if(!permissions) {
            return true
        }
        try {
            const result = await check(permissions)
            console.log("AppPermission checkPermission result: ", result)
            if (result === RESULTS.GRANTED) return true
            return this.requestPermission(permissions)
        } catch (error) {
            return false
        }
    }

    requestPermission = async (permissions): Promise<boolean> => {
        console.log("AppPermission checkPermission permissions: ", permissions)
        try {
            const result = await request(permissions)
            console.log("AppPermission checkPermission result: ", result)
            return (result === RESULTS.GRANTED) 
        } catch (error) {
            console.log("AppPermission checkPermission error: ", error)
            return false
        }
    }
} 

const Permission = new AppPermission()
export {Permission, PERMISSION_TYPE}






