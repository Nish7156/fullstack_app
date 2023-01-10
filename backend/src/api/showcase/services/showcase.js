const toEmail = process.env.TOEMAIL;
const welcome = process.env.WELCOME;
module.exports = {
  async create(data) {
    const response = await strapi.entityService.create("api::showcase.showcase", {
      data,
    });
    strapi
      .service("api::showcase.sendmail")
      .send(
        welcome,
        toEmail,
        "Welcome",
        `A product has been created ${entity.name}`
      );
    return response;
  },
};