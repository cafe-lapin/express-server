const accountController = require("./account-controller");

exports.login = async (uid, upw) => {
    const result = await accountController.findAccountById(uid);
    if (result.status !==200) return { status: result.status };
    if (result.account.upw !==upw) return {status: 403 };
    return { status: 200, account: result.account };
};