const User = require('../models/index').getModel('user');

const user = {
	/**
	 * @Description: 登录
	 * @date 2023.08.28
	 * @params: { Object } userData
	 * @return: { Object | null }
	 */
	async login(userData) {
		return await User.findOne(userData);
	}
};

module.exports = user;
