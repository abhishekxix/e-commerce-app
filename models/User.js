const mongoose = require('mongoose');
const validator = require('validator');
const countryStateCity = require('country-state-city');
const bcrypt = require('bcryptjs');
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
      message: (stateCode) => `${stateCode.value} is not a valid state code.`,
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
            (stateCity) => stateCity.name.toLowerCase()
          )
        );
        return cities.has(city);
      },
      message: (city) =>
        `${city.value} is not a valid city in the provided state.`,
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
  role: {
    type: String,
    enum: ['admin', 'customer', 'owner'],
  },
});

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  }
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
