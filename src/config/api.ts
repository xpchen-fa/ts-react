import config from "@/config/config";

export default {
    sysUser_getCurrentUser: config.api + "/users/current", // 用户信息
    auth_status: config.api + "/auth_status", // 空接口权限验证
};