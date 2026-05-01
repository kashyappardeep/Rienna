import { products } from './productData'

const ProductArea = () => (
  <div className="aq-product-area pb-60" id="rienna-products">
    <div className="container">
      <div className="aq-product-top mb-40">
        <div className="row align-items-end">
          <div className="col-md-6">
            <div className="aq-product-title-box text-center text-md-start mb-15">
              <span className="aq-section-subtitle ff-satoshi-med mb-10">Featured Products</span>
              <h4 className="aq-section-title ff-satoshi-med fs-38 mb-0">Rienna Skincare Picks</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="aq-product-item aq-product-main mb-60" data-lazy="true">
              <div className="aq-product-thumb aq-img-hover-wrap p-relative mb-10">
                <a href={`/?page=product-details&product=${product.id}`}>
                  <img className="lazyload aq-product-img" src={product.image} alt={product.name} />
                  <img className="aq-img-hover lazyload" src={product.image} alt={product.name} />
                </a>
              </div>
              <div className="aq-product-content text-center text-md-start">
                <span className="aqf-product-3-category">{product.category}</span>
                <h4 className="aq-product-title mb-10">
                  <a href={`/?page=product-details&product=${product.id}`}>{product.name}</a>
                </h4>
                <div className="aq-product-price">
                  <ins>
                    <span className="aq-product-new-price">{product.price}</span>
                  </ins>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default ProductArea
