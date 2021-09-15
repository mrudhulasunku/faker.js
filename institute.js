* @namespace faker.institute
 */
var institute = function (faker) {
  
  var self = this;
  var f = faker.fake;
  
  /**
   * suffixes
   *
   * @method faker.institute.suffixes
   */
  this.suffixes = function () {
    // Don't want the source array exposed to modification, so return a copy
    return faker.definitions.institute.suffix.slice(0);
  }

  /**
   * instituteName
   *
   * @method faker.institute.instituteName
   * @param {string} format
   */
  this.instituteName = function (format) {

    var formats = [
      '{{name.lastName}} {{institute.instituteSuffix}}',
      '{{name.lastName}} - {{name.lastName}}',
      '{{name.lastName}}, {{name.lastName}} and {{name.lastName}}'
    ];

    if (typeof format !== "number") {
      format = faker.random.number(formats.length - 1);
    }

    return f(formats[format]);
  }

  /**
   * instituteSuffix
   *
   * @method faker.institute.instituteSuffix
   */
  this.instituteSuffix = function () {
      return faker.random.arrayElement(faker.institute.suffixes());
  }

  /**
   * catchPhrase
   *
   * @method faker.institute.catchPhrase
   */
  this.catchPhrase = function () {
    return f('{{institute.catchPhraseAdjective}} {{institute.catchPhraseDescriptor}} {{institute.catchPhraseNoun}}')
  }

  /**
   * bs
   *
   * @method faker.institute.bs
   */
  this.bs = function () {
    return f('{{institute.bsBuzz}} {{institute.bsAdjective}} {{institute.bsNoun}}');
  }

  /**
   * catchPhraseAdjective
   *
   * @method faker.institute.catchPhraseAdjective
   */
  this.catchPhraseAdjective = function () {
      return faker.random.arrayElement(faker.definitions.institute.adjective);
  }

  /**
   * catchPhraseDescriptor
   *
   * @method faker.institute.catchPhraseDescriptor
   */
  this.catchPhraseDescriptor = function () {
      return faker.random.arrayElement(faker.definitions.institute.descriptor);
  }

  /**
   * catchPhraseNoun
   *
   * @method faker.institute.catchPhraseNoun
   */
  this.catchPhraseNoun = function () {
      return faker.random.arrayElement(faker.definitions.institute.noun);
  }

  /**
   * bsAdjective
   *
   * @method faker.institute.bsAdjective
   */
  this.bsAdjective = function () {
      return faker.random.arrayElement(faker.definitions.institute.bs_adjective);
  }

  /**
   * bsBuzz
   *
   * @method faker.institute.bsBuzz
   */
  this.bsBuzz = function () {
      return faker.random.arrayElement(faker.definitions.institute.bs_verb);
  }

  /**
   * bsNoun
   *
   * @method faker.institute.bsNoun
   */
  this.bsNoun = function () {
      return faker.random.arrayElement(faker.definitions.institute.bs_noun);
  }
  
}

module['exports'] = institute;
© 2021 GitHub, Inc.
