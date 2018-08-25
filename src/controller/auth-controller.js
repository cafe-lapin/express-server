const accountController = require("./account-controller");

exports.login = (uid, upw) => {
    const result = accountController.findaccountById(uid);
    if (result.status !==200) return { status: result.status };
    if (result.account.upw !==upw) return {status: 403 };
    return { status: 200, account: result.account };
};