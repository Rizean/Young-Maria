class GirlCharacter extends BasicCharacter {
	constructor(config) {
		super(config)
		this.gender = variables().GENDER_FEMALE;
		this.genitals = variables().GENITALS_FEMALE;
		this.weight = variables().DEFAULT_WEIGHT;
		this.height = variables().DEFAULT_HEIGHT;

		Object.keys(config).forEach(pn => {
			if (pn === 'paperDoll') return
			this[pn] = clone(config[pn])
		})
	}
	clone() {
		return new GirlCharacter(this)
	}
	toJSON() {
		let ownData = {};
		Object.keys(this).forEach(pn => {
			if (pn === 'paperDoll') return
			ownData[pn] = clone(this[pn])
		})
		return JSON.reviveWrapper('new GirlCharacter($ReviveData$)', ownData);
	}
	getAttractiveness() {
		console.log('getAttractiveness')

		const clothesCategories = ['clothes', 'lingerie', 'accessories', 'erotic_accessories'];
		let attractiveness = this.attractiveness;

		for (let i = 0; i < clothesCategories.length; i++) {
			attractiveness += this.getAllure(clothesCategories[i]);
		}

		if (this.appearance.isCombed) attractiveness += 5;
		const MAKEUP = {none: 0, light: 5, tangible: 8, bright: 10}
		attractiveness += MAKEUP[this.appearance.makeup] || 0

		if (this.appearance.head.lips.color !== 'none') attractiveness += 4;

		if (this.cleanliness < 30) attractiveness -= 10;
		else if (this.cleanliness >= 30 && this.cleanliness < 60) attractiveness -= 5;

		if (this.appearance.teethBrushed === true) attractiveness += 5;
		else attractiveness -= 2;

		if (this.menstruation.isProtected !== true && this.menstruation.day >= 15) attractiveness -= 10;

		if (this.eroticLook.intimateHaircut === 'shaved') {
			attractiveness += 2;
		} else if (this.eroticLook.intimateHaircut === 'stubble') {
			attractiveness += 1;
		} else if (this.eroticLook.intimateHaircut === 'hairy') {
			attractiveness += 0;
		}
		return attractiveness
	}
	getAllure(category) {
		let allure = 0;

		for (const key in this.look[category]) {
			if (this.look[category][key].allure !== undefined) {
				allure += this.look[category][key].allure;
			}
		}
		return allure;
	}
}

window.GirlCharacter = GirlCharacter

