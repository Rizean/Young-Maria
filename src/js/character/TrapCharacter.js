window.TrapCharacter = function (config) {
    this.gender = $GENDER_FEMALE;
    this.genitals = $GENITALS_MALE;

    Object.keys(config).forEach(function (pn) {
        if (pn === 'paperDoll') return
        this[pn] = clone(config[pn]);
    }, this);
};

TrapCharacter.prototype = BasicCharacter;

//  BasicCharacter.prototype.clone = function () {
// 	  return new BasicCharacter(this);
//   };

//   BasicCharacter.prototype.toJSON = function () {
// 	  var ownData = {};

// 	  Object.keys(this).forEach(function (pn) {
// 		  ownData[pn] = clone(this[pn]);
// 	  }, this);

// 	  return JSON.reviveWrapper(
// 	  	'new BasicCharacter($ReviveData$)', ownData
// 	  );
//   };
