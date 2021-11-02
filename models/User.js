const mongoose = require('mongoose');
const validator = require('validator');
const countryStateCity = require('country-state-city');
const statesOfIndia = new Set(
  countryStateCity.State.getStatesOfCountry('IN').map((state) => state.isoCode)
);

const AddressSchema = new mongoose.Schema({
  localAddress: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: [true, 'Please provide local address'],
  },
  stateCode: {
    type: String,
    required: [true, 'Please provide state'],
    validate: {
      validator: function (stateCode) {
        return statesOfIndia.has(stateCode);
      },
      message: (stateCode) => `${stateCode} is not a valid state code.`,
    },
  },
  city: {
    type: String,
    required: [true, 'Please provide city'],
    validate: {
      validator: function (city) {
        city = city.toLowerCase();
        const cities = new Set(
          countryStateCity.City.getCitiesOfState('IN', this.stateCode).map(
            (city) => city.toLowerCase()
          )
        );
        return cities.has(city);
      },
      message: (city) => `${city} is not a valid city in the provided state.`,
    },
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: [true, 'Please provide name'],
  },
  email: {
    type: String,
    required: true,
    validate: validator.default.isEmail,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
  },
  phoneNumber: {
    type: String,
    validate: validator.default.isMobilePhone,
  },
  address: {
    type: AddressSchema,
    required: [true, 'Please provide address'],
  },
});

module.exports = mongoose.model('User', UserSchema);
