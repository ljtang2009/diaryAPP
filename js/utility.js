(function(){
	var _utility = function(){};
	/**
	 * @description 判断是否是晚上
	 * @return {Boolean}
	 */
	_utility.prototype.isNight = function(){
		var result = false;
		var now_hour = new Date().getHours();
		if (now_hour >= 18 || now_hour < 6){
			result = true;
		}
		return result;
	}
	/**
	 * @description 更具时间获取样式
	 * @return {Object}
	 */
	_utility.prototype.getStyleWithTime = function(){
		var result = {};
		if (this.isNight()){
			result.bg = "linear-gradient(to bottom, #004FAA, #4F9DCA)";		//背景色
			result.mountain1 = "night_mountain_1.png";		//山图片1
			result.mountain2 = "night_mountain_2.png";		//山图片2
			result.mountain3 = "night_mountain_3.png";		//山图片2
		}
		else {
			result.bg = "linear-gradient(to bottom, #FEDE84, #FCE8B4)";
			result.mountain1 = "day_mountain_1.png";
			result.mountain2 = "day_mountain_2.png";
			result.mountain3 = "day_mountain_3.png";
		}
		return result;
	}
	window.utility = new _utility();
})();