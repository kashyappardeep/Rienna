@include('partials.header')
<main>
   <div class="aq-product-area pb-60 pt-100">
      <div class="container">
         <div class="row" style="">
            <div class="col-lg-6">
               <div class="aq-product-thumb mb-30">
                <img alt="Under Eye Roll On Gel" class="w-100" src="{{ asset('assets/images/' . $package->image) }}">
               </div>
            </div>
            <div class="col-lg-6">
               <div class="aq-product-details-wrap pt-25">
                  <div class="aq-product-details-radius-style">
                     <div class="aq-product-badge"><span class="clr-sale" data-bg-color="#12947B" style="background-color: rgb(18, 148, 123);">In Stock</span></div>
                  </div>
                  <!-- <div class="aq-product-details-category"><span>Eye Care</span></div> -->
                  <h3 class="aq-product-details-title mb-10">{{ $package->name }}</h3>
                  <div class="tp-product-details-inventory">
                     <div class="aq-product-details-rating-wrapper d-flex align-items-center">
                        <div class="aq-product-details-rating-box d-flex align-items-center mb-15">
                           <div class="aq-product-details-rating">
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentColor"></path>
                                 </svg>
                              </span>
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentColor"></path>
                                 </svg>
                              </span>
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentColor"></path>
                                 </svg>
                              </span>
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentColor"></path>
                                 </svg>
                              </span>
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <path d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z" fill="currentColor"></path>
                                 </svg>
                              </span>
                              <span class="avarage">4.75</span>
                           </div>
                           <div class="aq-product-details-reviews"><span>( 20 review )</span></div>
                        </div>
                     </div>
                  </div>
                  <div class="aq-product-details-price-wrap mb-20"><ins><span class="aq-product-details-price new-price">${{ $package->amount }}</span></ins></div>
                  <!-- <div class="aq-product-details-mesg-wrap mb-25">
                     <p class="slide-text">A cooling under-eye gel that helps reduce puffiness and refresh tired eyes for a brighter, more awake look.</p>
                     <button class="toggle-btn">Read More..</button>
                  </div> -->
                  <div class="aq-product-details-action-wrapper mb-25">
                     <div class="aq-product-details-action-item-wrapper d-sm-flex align-items-center">
                        <div class="aq-product-details-quantity">
                           <div class="aq-product-quantity mb-10 mr-10">
                              <span class="aq-cart-minus">
                                 <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                              </span>
                              <input class="aq-cart-input" type="text" value="1">
                              <span class="aq-cart-plus">
                                 <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M5.5 10.5V1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                 </svg>
                              </span>
                           </div>
                        </div>
                        <div class="aq-product-details-add-to-cart d-flex align-items-center mb-10 w-100">
                           <div class="aq-product-details-add-to-cart-btn w-100"><button class="aq-btn-black btn-square w-100">Add To Cart</button></div>
                           <button type="button" class="aq-product-action-btn action-btn-2 aq-wishlist-btn aq-tooltip-top">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                 <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                              </svg>
                              <span class="aq-tooltip-item">Wishlist</span>
                           </button>
                           <button type="button" class="aq-product-action-btn action-btn-2 aq-compare-btn aq-tooltip-top">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                 <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              <span class="aq-tooltip-item">Compare</span>
                           </button>
                        </div>
                     </div>
                     <div class="aq-product-details-buy-now-btn">
                        <a href="{{ route('checkout', $package->id) }}" class="aq-btn-black btn-red-bg btn-square w-100 
                        d-inline-block text-center">Buy Now</a>
                     </div>
                  </div>
                  <div class="aq-product-details-mesg-wrap">
                     <ul>
                        <li>
                           <div class="aq-product-details-mesg d-flex align-items-center"><span>Cooling roller applicator</span></div>
                        </li>
                        <li>
                           <div class="aq-product-details-mesg d-flex align-items-center"><span>Reduces puffiness</span></div>
                        </li>
                        <li>
                           <div class="aq-product-details-mesg d-flex align-items-center"><span>Hydrating gel texture</span></div>
                        </li>
                     </ul>
                  </div>
                  <div class="aq-product-details-payment d-flex align-items-center justify-content-between">
                     <p>Guaranteed safe <br> and secure checkout</p>
                     <img alt="payment" src="{{ asset('assets/images/payment.png') }}">
                  </div>
               </div>
            </div>
         </div>
         
      </div>
   </div>
</main>
@include('partials.footer')