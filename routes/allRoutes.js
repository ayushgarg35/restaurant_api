const filteredGet = require("restaurantsAPIs/controllers/getFilteredRestCont");
const updateDelete = require("restaurantsAPIs/controllers/updateDeleteCont");

const urlPrefix = '/api/restaurant';

module.exports = (app) => {
  app.route(`${urlPrefix}`)   
    .get(require("restaurantsAPIs/controllers/getRestCont"))
    .delete(updateDelete.delete);
  app.get(`${urlPrefix}/catgories`, filteredGet.getCat);
  app.post(`${urlPrefix}/add`,require("restaurantsAPIs/controllers/addRestCont"))
  app.route(`${urlPrefix}/:id`)
    .get(filteredGet.getById)
    .put(updateDelete.updateById)
    .delete(updateDelete.deleteById);
  app.get(`${urlPrefix}/categories/:categoryName`, filteredGet.getByCat);
  app.get(`${urlPrefix}/rating/:ratingValue`, filteredGet.getByRatings);
};