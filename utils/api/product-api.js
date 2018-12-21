import commonApi from "./common.js"

function findAllProducts(successCallback) {
  //查询所有产品
  commonApi.get("products", {}, response => {
    successCallback(response.data.data.list);
  })
}

function productDetail(productId, successCallback) {
  //查询单个产品详情
  commonApi.get("product/" + productId, {}, response => {
    successCallback(response.data.data.product);
  })
}

export { findAllProducts, productDetail }