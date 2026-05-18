@include('partials.header')

   <main>

      <!-- slider area start -->
      <div class="aqf-slider-area csm-slider-style">
         <div class="swiper aqf-slider-active p-relative">
            <div class="swiper-wrapper">
               <div class="swiper-slide">
                  <div class="aqf-slider-item p-relative" data-bg-color="#F5D9D7">
                     <div class="container">
                        <div class="row align-items-center">
                           <div class="col-xl-6 col-lg-5 col-md-6">
                              <div class="aqf-slider-content csm-slider-content z-index-1">
                                 <span class="aq-section-subtitle ff-satoshi-med mb-15">New Collection</span>
                                 <h3 class="aq-section-title ff-satoshi-bold fs-84 mb-30">Unveil the Beauty<br>  Within Your Skin</h3>
                                 <a class="aq-btn-link aq-btn-underline line-h-2" href="product-card-v5.html">
                                    Discover Now
                                    <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                          <path d="M0.75 5.75H10.75M10.75 5.75L5.75 0.75M10.75 5.75L5.75 10.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aqf-slider-thumb">
                        <img class="w-100" src="{{ asset('assets/images/slider-2.png') }}" alt="">
                     </div>
                  </div>
               </div>
               <div class="swiper-slide">
                  <div class="aqf-slider-item p-relative" data-bg-color="#F5D9D7">
                     <div class="container">
                        <div class="row align-items-center">
                           <div class="col-xl-6 col-lg-5 col-md-6">
                              <div class="aqf-slider-content csm-slider-content z-index-1">
                                 <span class="aq-section-subtitle ff-satoshi-med mb-15">Fresh Collection</span>
                                 <h3 class="aq-section-title ff-satoshi-bold fs-84 mb-30">Discover Your Skin’s <br> Natural Glow</h3>
                                 <a class="aq-btn-link aq-btn-underline line-h-2" href="product-card-v5.html">
                                    Discover Now
                                    <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                          <path d="M0.75 5.75H10.75M10.75 5.75L5.75 0.75M10.75 5.75L5.75 10.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aqf-slider-thumb">
                        <img src="{{ asset('assets/images/slider-1.png') }}" alt="">
                     </div>
                  </div>
               </div>
               <div class="swiper-slide">
                  <div class="aqf-slider-item p-relative" data-bg-color="#F5D9D7">
                     <div class="container">
                        <div class="row align-items-center">
                           <div class="col-xl-6 col-lg-5 col-md-6">
                              <div class="aqf-slider-content csm-slider-content z-index-1">
                                 <span class="aq-section-subtitle ff-satoshi-med mb-15">Latest Edition</span>
                                 <h3 class="aq-section-title ff-satoshi-bold fs-84 mb-30">Reveal Your Skin’s <br> True Glow.</h3>
                                 <a class="aq-btn-link aq-btn-underline line-h-2" href="product-card-v5.html">
                                    Discover Now
                                    <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                          <path d="M0.75 5.75H10.75M10.75 5.75L5.75 0.75M10.75 5.75L5.75 10.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aqf-slider-thumb">
                        <img src="{{ asset('assets/images/slider-3.png') }}" alt="">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- slider area end -->

      

      <!-- stories area start -->
      <div class="csm-stories-area pt-95 pb-90">
         <div class="container">
            <div class="row">
               <div class="col-xl-12">
                  <div class="csm-stories-title-box aq-section-paragraph text-center mb-45">
                     <h4 class="aq-section-title ff-onest-bold fs-36 mb-15">Community Stories</h4>
                     <p>Express your style with our standout collection—fashion meets sophistication.</p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-3 col-md-6">
                  <div class="csm-stories-item p-relative fix mb-25">
                     <div class="csm-stories-video">
                        <video loop="" muted="" autoplay="" playsinline="">
                           <source src="{{ asset('assets/media/cosmetic-1.mp4') }}" type="video/mp4">
                        </video>
                     </div>
                     <!-- <div class="csm-stories-content-wrap d-inline-flex align-items-center">
                        <div class="csm-stories-thumb-sm">
                           <img src="{{ asset('assets/images/img-1-sm.jpg') }}" alt="">
                        </div>
                        <div class="csm-stories-content">
                           <h4 class="csm-stories-title"><a href="#">Colorstay Suede Lip...</a></h4>
                           <span>$164.00</span>
                        </div>
                     </div> -->
                  </div>
               </div>
               <div class="col-xl-3 col-md-6">
                  <div class="csm-stories-item p-relative fix mb-25">
                     <div class="csm-stories-video">
                        <video loop="" muted="" autoplay="" playsinline="">
                           <source src="{{ asset('assets/media/cosmetic-2.mp4') }}" type="video/mp4">
                        </video>
                     </div>
                     <!-- <div class="csm-stories-content-wrap d-inline-flex align-items-center">
                        <div class="csm-stories-thumb-sm">
                           <img src="{{ asset('assets/images/img-2-sm.jpg') }}" alt="">
                        </div>
                        <div class="csm-stories-content">
                           <h4 class="csm-stories-title"><a href="#">Revlon ColorStay Suede</a></h4>
                           <span>$99.00</span>
                        </div>
                     </div> -->
                  </div>
               </div>
               <div class="col-xl-3 col-md-6">
                  <div class="csm-stories-item p-relative fix mb-25">
                     <div class="csm-stories-video">
                        <video loop="" muted="" autoplay="" playsinline="">
                           <source src="{{ asset('assets/media/cosmetic-3.mp4') }}" type="video/mp4">
                        </video>
                     </div>
                     <!-- <div class="csm-stories-content-wrap d-inline-flex align-items-center">
                        <div class="csm-stories-thumb-sm">
                           <img src="{{ asset('assets/images/img-2-sm.jpg') }}" alt="">
                        </div>
                        <div class="csm-stories-content">
                           <h4 class="csm-stories-title"><a href="#">Ink Liquid Lipstick</a></h4>
                           <span>$159.00</span>
                        </div>
                     </div> -->
                  </div>
               </div>
               <div class="col-xl-3 col-md-6">
                  <div class="csm-stories-item p-relative fix mb-25">
                     <div class="csm-stories-video">
                        <video loop="" muted="" autoplay="" playsinline="">
                           <source src="{{ asset('assets/media/cosmetic-4.mp4') }}" type="video/mp4">
                        </video>
                     </div>
                     <!-- <div class="csm-stories-content-wrap d-inline-flex align-items-center">
                        <div class="csm-stories-thumb-sm">
                           <img src="{{ asset('assets/images/img-1-sm.jpg') }}" alt="">
                        </div>
                        <div class="csm-stories-content">
                           <h4 class="csm-stories-title"><a href="#">Soft Matte Lip Cream</a></h4>
                           <span>$149.00</span>
                        </div>
                     </div> -->
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- stories area end -->

      <!-- product area start -->
      <div class="aq-product-area csm-product-style">
         <div class="container">
            <div class="aq-product-top mb-50">
               <div class="row align-items-end">
                  <div class="col-md-8">
                     <div class="csm-product-title-box aq-section-paragraph text-center text-md-start">
                        <h4 class="aq-section-title ff-onest-bold fs-36 mb-15">Our Flash Deals</h4>
                        <p class="mb-0">Superior performance and customer satisfaction in one.</p>
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="csm-product-btn text-center text-md-end">
                        <a class="aq-btn-white btn-square-bg btn-border-gray" href="product-card-v5.html">
                           See all Products
                           <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                 <path d="M10.7093 4.74984H0.75M10.7093 4.74984L6.69271 0.75M10.7093 4.74984L6.69271 8.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="aq-product-slide-wrap p-relative">
               <div class="aq-product-arrow">
                  <button class="aq-product-prev">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                           <path d="M5.75 10.75L0.75 5.75L5.75 0.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                  </button>
                  <button class="aq-product-next">
                     <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                           <path d="M0.75 10.75L5.75 5.75L0.75 0.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                     </span>
                  </button>
               </div>
               <div class="swiper aq-product-active">
    <div class="swiper-wrapper">

        @foreach($packages as $package)
        <div class="swiper-slide">
            <div class="aq-product-item aq-product-main mb-60" data-lazy="true">

                <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">

                    <a href="{{ route('product.details', $package->id) }}">
                        <img class="lazyload aq-product-img"
                             src="{{ asset('assets/images/' . $package->image) }}" 
                             alt="{{ $package->name }}">

                        <img class="aq-img-hover lazyload"
                             src="{{ asset('assets/images/' . $package->image) }}" 
                             alt="">
                    </a>

                </div>

                <div class="aq-product-content text-center">

                    <div class="aq-product-price mb-5">
                        <ins>
                            <span class="aq-product-new-price">
                                ${{ $package->amount }}
                            </span>
                        </ins>
                    </div>

                    <h4 class="aq-product-title mb-5">
                        <a href="#">
                            {{ $package->name }}
                        </a>
                    </h4>

                </div>

            </div>
        </div>
        @endforeach

    </div>
    </div>
            </div>
         </div>
      </div>
      <!-- product area end -->

      <!-- banner area start -->
      <div class="aqf-banner-2-area csm-banner-style pt-15 pb-70">
         <div class="container container-1850">
            <div class="row gx-15">
               <div class="col-xl-6">
                  <div class="aqf-banner-2-box p-relative mb-30">
                     <div class="aqf-banner-2-thumb">
                        <img class="w-100" src="{{ asset('assets/images/banner-1.jpeg') }}" alt="">
                     </div>
                     <!-- <div class="aqf-banner-2-content">
                        <span class="aq-section-subtitle aq-uppercase mb-15">Cosmetics Collection</span>
                        <h4 class="aq-section-title ff-satoshi-bold fs-40 mb-20">Nourish with <br> Propolis skincare.</h4>
                        <a class="aq-btn-white btn-square-bg" href="product-card-v5.html">
                           Discover Now
                           <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                 <path d="M10.7093 4.74984H0.75M10.7093 4.74984L6.69271 0.75M10.7093 4.74984L6.69271 8.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </span>
                        </a>
                     </div> -->
                  </div>
               </div>
               <div class="col-xl-6">
                  <div class="aqf-banner-2-box p-relative mb-30">
                     <div class="aqf-banner-2-thumb">
                        <img class="w-100" src="{{ asset('assets/images/banner-2.jpeg') }}" alt="">
                     </div>
                     <!-- <div class="aqf-banner-2-content">
                        <span class="aq-section-subtitle aq-uppercase mb-15">Cosmetics Collection</span>
                        <h4 class="aq-section-title ff-satoshi-bold fs-40 mb-20">Foundation <br> & powder brush</h4>
                        <a class="aq-btn-white btn-square-bg" href="product-card-v5.html">
                           Discover Now
                           <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                                 <path d="M10.7093 4.74984H0.75M10.7093 4.74984L6.69271 0.75M10.7093 4.74984L6.69271 8.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </span>
                        </a>
                     </div> -->
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- banner area end -->

      <!-- product area start -->
      <div class="aq-product-area csm-product-style">
         <div class="container">
            <div class="aq-product-top">
               <div class="row align-items-end">
                  <div class="col-lg-6">
                     <div class="csm-product-title-box aq-section-paragraph text-center text-lg-start mb-50">
                        <h4 class="aq-section-title ff-onest-bold fs-36 mb-15">Our Flash Deals</h4>
                        <p class="mb-0">Superior performance and customer satisfaction in one.</p>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="csm-product-tab-btn text-center text-lg-end mb-50">
                        <ul class="nav nav-tab d-inline-flex" id="myTab" role="tablist">
                           <li class="nav-item" role="presentation">
                              <button class="nav-links active aq-tooltip-top" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                 All Collection
                                 <span class="aq-tooltip-item">26</span>
                              </button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-links aq-tooltip-top" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                 Trending
                                 <span class="aq-tooltip-item">28</span>
                              </button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-links aq-tooltip-top" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                 Beauty
                                 <span class="aq-tooltip-item">33</span>
                              </button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-links aq-tooltip-top" id="cosmetics-tab" data-bs-toggle="tab" data-bs-target="#cosmetics-tab-pane" type="button" role="tab" aria-controls="cosmetics-tab-pane" aria-selected="false">
                                 Cosmetics
                                 <span class="aq-tooltip-item">49</span>
                              </button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tab-content" id="myTabContent">
               <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                  <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1">
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                             
                              <a href="#">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-5.jpeg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-5-hover.jpeg') }}" alt="">
                              </a>
                           </div>
                           
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                             
                              <a href="#">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-6.jpeg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-6-hover.jpeg') }}" alt="">
                              </a>
                           </div>
                          
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                             
                              <a href="#">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-7.jpeg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-7-hover.jpeg') }}" alt="">
                              </a>
                           </div>
                          
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                             
                              <a href="#">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-8.jpeg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-8-hover.jpeg') }}" alt="">
                              </a>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                  <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1">
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-8%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-1.jpg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-1-hover.jpg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$164.00</span></ins>
                                 <del><span class="aq-product-old-price">$600.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Blush Bold Blurring Powde</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#919191">Sold Out</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-2.jpg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-2-hover.jpg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Luxe Length Nail Gloss</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#3C6951">Pre-Order</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-3.jpg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-3-hover.jpg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Enriched Hand Wash</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-18%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-4.jpg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-4-hover.jpg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$133.00</span></ins>
                                 <del><span class="aq-product-old-price">$300.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="#">LANEIGE Lip Sleeping Mask</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                  <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1">
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#3C6951">Pre-Order</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-7.jpeg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-7-hover.jpg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$5.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Under EYE</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-18%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-8.jpeg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-8-hover.jpeg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$5.00</span></ins>
                                 <del><span class="aq-product-old-price">$10.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Pantherine Pro 20-Piece Brush Set</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <!-- <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-17%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div> -->
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-5.jpeg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-5-hover.jpeg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$164.00</span></ins>
                                 <del><span class="aq-product-old-price">$400.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="#">Enriched Hand Wash</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#919191">Sold Out</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-6.jpg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-6-hover.jpg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Lip Sleeping Mask</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane fade" id="cosmetics-tab-pane" role="tabpanel" aria-labelledby="cosmetics-tab" tabindex="0">
                  <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-1">
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-11%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-5.jpeg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-5-hover.jpeg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$299.00</span></ins>
                                 <del><span class="aq-product-old-price">$900.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Enriched Hand Wash</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#919191">Sold Out</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-6.jpg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-6-hover.jpg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="#">Lip Sleeping Mask</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#3C6951">Pre-Order</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-7.jpg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-7-hover.jpg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$99.00</span></ins>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Ultralip High Shine Lipstick</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col">
                        <div class="aq-product-item aq-product-main mb-60" data-lazy="true">
                           <div class="aq-product-thumb aq-img-hover-wrap p-relative mb-20">
                              <div class="aq-product-badge">
                                 <span class="clr-sale" data-bg-color="#9C362D">-21%</span>
                              </div>
                              <div class="aq-product-action">
                                 <button type="button" class="aq-product-action-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                       <path d="M6.19751 0.75L3.30151 3.654M11.3015 0.75L14.1975 3.654M6.95776 10.3501V13.1901M10.6375 10.3501V13.1901M1.94997 7.14993L3.07797 14.0619C3.33397 15.6139 3.94997 16.7499 6.23796 16.7499H11.062C13.55 16.7499 13.918 15.6619 14.206 14.1579L15.55 7.14993M0.75 5.42996C0.75 3.94996 1.542 3.82996 2.526 3.82996H14.974C15.958 3.82996 16.75 3.94996 16.75 5.42996C16.75 7.14996 15.958 7.02996 14.974 7.02996H2.526C1.542 7.02996 0.75 7.14996 0.75 5.42996Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                          
                                    <span class="aq-tooltip-item">Add to Cart</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-tooltip" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                                       <path d="M12.0557 7.75429C12.0557 9.42922 10.7022 10.7827 9.0273 10.7827C7.35238 10.7827 5.99891 9.42922 5.99891 7.75429C5.99891 6.07937 7.35238 4.72589 9.0273 4.72589C10.7022 4.72589 12.0557 6.07937 12.0557 7.75429Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                       <path d="M9.02734 14.75C12.0134 14.75 14.7965 12.9905 16.7337 9.94517C17.495 8.75242 17.495 6.74758 16.7337 5.55483C14.7965 2.50952 12.0134 0.75 9.02734 0.75C6.04124 0.75 3.25816 2.50952 1.321 5.55483C0.559668 6.74758 0.559668 8.75242 1.321 9.94517C3.25816 12.9905 6.04124 14.75 9.02734 14.75Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                      
                                    <span class="aq-tooltip-item">Quick View</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-wishlist-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                       <path d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                                    </svg>                                                                               
                                    <span class="aq-tooltip-item">Add To Wishlist</span>
                                 </button>
                                 <button type="button" class="aq-product-action-btn aq-compare-btn aq-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                                       <path d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>                                                                          
                                    <span class="aq-tooltip-item">Add To Compare</span>
                                 </button>
                              </div>
                              <a href="product-details-default.html">
                                 <img class="lazyload aq-product-img" src="{{ asset('assets/images/cosmetics-8.jpg') }}" alt="">
                                 <img class="aq-img-hover lazyload" src="{{ asset('assets/images/cosmetics-8-hover.jpg') }}" alt="">
                              </a>
                           </div>
                           <div class="aq-product-content text-center">
                              <div class="aq-product-price mb-5">
                                 <ins><span class="aq-product-new-price">$169.00</span></ins>
                                 <del><span class="aq-product-old-price">$599.00</span></del>
                              </div>
                              <h4 class="aq-product-title mb-5"><a href="product-details-default.html">Pantherine Pro 20-Piece Brush Set</a></h4>
                              <div class="aq-product-ratting">
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                                 <span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M5.21608 0.307961C5.38688 -0.102685 5.9686 -0.102684 6.1394 0.307962L7.34463 3.20568C7.41664 3.3788 7.57944 3.49709 7.76634 3.51207L10.8947 3.76287C11.338 3.79841 11.5178 4.35166 11.18 4.641L8.79653 6.68268C8.65414 6.80466 8.59195 6.99605 8.63546 7.17843L9.36364 10.2311C9.46684 10.6638 8.99621 11.0057 8.61666 10.7739L5.93837 9.13797C5.77836 9.04024 5.57712 9.04024 5.41711 9.13797L2.73882 10.7739C2.35927 11.0057 1.88865 10.6638 1.99184 10.2311L2.72003 7.17843C2.76353 6.99605 2.70135 6.80466 2.55895 6.68268L0.175492 4.641C-0.162276 4.35166 0.0174878 3.79841 0.460815 3.76287L3.58915 3.51207C3.77604 3.49709 3.93885 3.3788 4.01085 3.20568L5.21608 0.307961Z" fill="currentcolor"></path>
                                    </svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- product area end -->

      <!-- outfit area start -->
      <div class="aqf-bundle-area csm-bundle-style pt-60 pb-120">
         <div class="container">
            <div class="row gx-0">
               <div class="col-lg-6">
                  <div class="aqf-bundle-thumb">
                     <img class="w-100" src="{{ asset('assets/images/img-1_1.jpg') }}" alt="">
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="aqf-bundle-wrap">
                     <div class="aqf-bundle-title-box mb-30">
                        <span class="aq-section-subtitle ff-satoshi-med mb-10">Bundle and Save</span>
                        <h4 class="aq-section-title ff-satoshi-med fs-38 mb-0">Shop this look</h4>
                     </div>
                     <div class="aqf-bundle-details-wrap">
                        <div class="aq-cartmini-product-item d-flex align-items-center mb-25 pb-25">
                           <div class="aq-cartmini-product-thumbnail">
                              <img src="{{ asset('assets/images/img-2_1.jpg') }}" alt="">
                           </div>
                           <div class="aq-cartmini-product-summary-wrap">
                              <div class="aq-cartmini-product-summary d-flex justify-content-between align-items-end">
                                 <div class="aq-cartmini-product-summary-inner">
                                    <div class="aq-cartmini-product-ratting mb-5">
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#DCDCDC"></path>
                                          </svg>
                                       </span>
                                    </div>
                                    <h4 class="aq-product-title mb-15"><a href="product-details-group.html"> Tank Top - Orange</a></h4>
                                 </div>
                                 <div class="aq-cartmini-product-price-wrap">
                                    <span class="aq-cartmini-product-price">$99.00</span>
                                 </div>
                              </div>
                              <div class="aqf-bundle-select aq-select">
                                 <select>
                                    <option>Select an option</option>
                                    <option>Red</option>
                                    <option>Black</option>
                                    <option>Green</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="aq-cartmini-product-item d-flex align-items-center mb-25 pb-25">
                           <div class="aq-cartmini-product-thumbnail">
                              <img src="{{ asset('assets/images/img-3_1.jpg') }}" alt="">
                           </div>
                           <div class="aq-cartmini-product-summary-wrap">
                              <div class="aq-cartmini-product-summary d-flex justify-content-between align-items-end">
                                 <div class="aq-cartmini-product-summary-inner">
                                    <div class="aq-cartmini-product-ratting mb-5">
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#DCDCDC"></path>
                                          </svg>
                                       </span>
                                    </div>
                                    <h4 class="aq-product-title mb-15"><a href="product-details-group.html"> Tank Top - Orange</a></h4>
                                 </div>
                                  <div class="aq-cartmini-product-price-wrap">
                                    <span class="aq-cartmini-product-price">$44.00</span>
                                 </div>
                              </div>
                              <div class="aqf-bundle-select aq-select">
                                 <select>
                                    <option>Select an option</option>
                                    <option>Red</option>
                                    <option>Black</option>
                                    <option>Green</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="aq-cartmini-product-item d-flex align-items-center mb-25 pb-25">
                           <div class="aq-cartmini-product-thumbnail">
                              <img src="{{ asset('assets/images/img-1_1.jpg') }}" alt="">
                           </div>
                           <div class="aq-cartmini-product-summary-wrap">
                              <div class="aq-cartmini-product-summary d-flex justify-content-between align-items-end">
                                 <div class="aq-cartmini-product-summary-inner">
                                    <div class="aq-cartmini-product-ratting mb-5">
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#FF9C05"></path>
                                          </svg>
                                       </span>
                                       <span>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                             <path d="M5.21602 0.307984C5.38682 -0.102662 5.96854 -0.102661 6.13934 0.307985L7.34457 3.20571C7.41657 3.37882 7.57938 3.49711 7.76627 3.51209L10.8946 3.76289C11.3379 3.79843 11.5177 4.35168 11.1799 4.64102L8.79647 6.68271C8.65407 6.80468 8.59189 6.99607 8.63539 7.17845L9.36358 10.2312C9.46677 10.6638 8.99615 11.0057 8.6166 10.7739L5.93831 9.138C5.7783 9.04026 5.57706 9.04026 5.41705 9.138L2.73876 10.7739C2.35921 11.0057 1.88859 10.6638 1.99178 10.2312L2.71997 7.17845C2.76347 6.99607 2.70128 6.80468 2.55889 6.68271L0.175429 4.64102C-0.162339 4.35168 0.0174247 3.79843 0.460752 3.76289L3.58908 3.51209C3.77598 3.49711 3.93878 3.37882 4.01079 3.20571L5.21602 0.307984Z" fill="#DCDCDC"></path>
                                          </svg>
                                       </span>
                                    </div>
                                    <h4 class="aq-product-title mb-15"><a href="product-details-group.html"> Tank Top - Orange</a></h4>
                                 </div>
                                 <div class="aq-cartmini-product-price-wrap">
                                    <span class="aq-cartmini-product-price">$59.00</span>
                                 </div>
                              </div>
                              <div class="aqf-bundle-select aq-select">
                                 <select>
                                    <option>Select an option</option>
                                    <option>Red</option>
                                    <option>Black</option>
                                    <option>Green</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="aqf-bundle-box">
                        <a class="aq-btn-black btn-coffee-bg w-100 text-center" href="product-details-group.html">
                           Add Selected To Cart-$34.00
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- outfit area end -->

      <!-- blog area start -->
      <!-- <div class="aq-blog-area csm-blog-style pb-80">
         <div class="container">
            <div class="row">
               <div class="col-xl-12">
                  <div class="aq-blog-title-box text-center mb-40">
                     <span class="aq-section-subtitle ff-satoshi-reg mb-15">Our Blog & News</span>
                     <h4 class="aq-section-title ff-onest-bold fs-36">Latest News & Articles</h4>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-4 col-md-6">
                  <div class="aq-blog-item">
                     <div class="aq-blog-thumb p-relative">
                        <a href="blog-details.html"><img src="images/blog-1.jpg" alt=""></a>
                        <span class="aq-blog-meta-date">06 July, 2025</span>
                     </div>
                     <div class="aq-blog-content text-center">
                        <div class="aq-blog-meta-cat mb-15">
                           <i>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                 <path d="M4.12891 4.12988H4.13621M12.636 8.14182L8.14808 12.6297C8.03182 12.7461 7.89375 12.8384 7.74178 12.9014C7.58981 12.9644 7.42691 12.9969 7.26239 12.9969C7.09788 12.9969 6.93498 12.9644 6.78301 12.9014C6.63104 12.8384 6.49297 12.7461 6.37671 12.6297L1 7.25926V1H7.25926L12.636 6.37671C12.8691 6.61126 13 6.92854 13 7.25926C13 7.58998 12.8691 7.90727 12.636 8.14182Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </i>
                           <span>Fashion,</span>
                           <span>Lift Style,</span>
                           <span>News</span>
                        </div>
                        <h4 class="aq-blog-title">
                           <a href="blog-details.html">The 'Boomerang' Employees Returning After Quitting</a>
                        </h4>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-md-6">
                  <div class="aq-blog-item">
                     <div class="aq-blog-thumb p-relative">
                        <a href="blog-details.html"><img src="images/blog-2.jpg" alt=""></a>
                        <span class="aq-blog-meta-date">04 April, 2024</span>
                     </div>
                     <div class="aq-blog-content text-center">
                        <div class="aq-blog-meta-cat mb-15">
                           <i>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                 <path d="M4.12891 4.12988H4.13621M12.636 8.14182L8.14808 12.6297C8.03182 12.7461 7.89375 12.8384 7.74178 12.9014C7.58981 12.9644 7.42691 12.9969 7.26239 12.9969C7.09788 12.9969 6.93498 12.9644 6.78301 12.9014C6.63104 12.8384 6.49297 12.7461 6.37671 12.6297L1 7.25926V1H7.25926L12.636 6.37671C12.8691 6.61126 13 6.92854 13 7.25926C13 7.58998 12.8691 7.90727 12.636 8.14182Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </i>
                           <span>Fashion,</span>
                           <span>Lift Style,</span>
                           <span>News</span>
                        </div>
                        <h4 class="aq-blog-title">
                           <a href="blog-details.html">Fast fashion: How clothes are linked to climate change</a>
                        </h4>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-md-6">
                  <div class="aq-blog-item">
                     <div class="aq-blog-thumb p-relative">
                        <a href="blog-details.html"><img src="images/blog-3.jpg" alt=""></a>
                        <span class="aq-blog-meta-date">18 July, 2023</span>
                     </div>
                     <div class="aq-blog-content text-center">
                        <div class="aq-blog-meta-cat mb-15">
                           <i>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                 <path d="M4.12891 4.12988H4.13621M12.636 8.14182L8.14808 12.6297C8.03182 12.7461 7.89375 12.8384 7.74178 12.9014C7.58981 12.9644 7.42691 12.9969 7.26239 12.9969C7.09788 12.9969 6.93498 12.9644 6.78301 12.9014C6.63104 12.8384 6.49297 12.7461 6.37671 12.6297L1 7.25926V1H7.25926L12.636 6.37671C12.8691 6.61126 13 6.92854 13 7.25926C13 7.58998 12.8691 7.90727 12.636 8.14182Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                           </i>
                           <span>Fashion,</span>
                           <span>Lift Style,</span>
                           <span>News</span>
                        </div>
                        <h4 class="aq-blog-title">
                           <a href="blog-details.html">The Sound Of Fashion: Malcolm In His Own Words</a>
                        </h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div> -->
      <!-- blog area end -->

      <!-- feature area start -->
      <div class="aqf-shop-feature-ptb csm-feature-style pt-75 pb-25 ml-50 mr-50" data-bg-color="#F9F9F9">
         <div class="container">
            <div class="aqf-shop-feature-wrap">
               <div class="row">
                  <div class="col-xl-3 col-md-6">
                     <div class="aqf-shop-feature-item mb-30 text-center">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                              <path d="M2.07422 9.99707L17.0833 18.6829L31.9904 10.048M17.083 34.0831V18.666M25.5831 19.8554V13.6342L9.45215 4.31934M13.5663 1.5659L4.48949 6.61431C2.43275 7.75316 0.75 10.6088 0.75 12.9545V22.5583C0.75 24.904 2.43275 27.7596 4.48949 28.8984L13.5663 33.9469C15.5041 35.0177 18.6827 35.0177 20.6204 33.9469L29.6973 28.8984C31.754 27.7596 33.4368 24.904 33.4368 22.5583V12.9545C33.4368 10.6088 31.754 7.75316 29.6973 6.61431L20.6204 1.5659C18.6657 0.478035 15.5041 0.478035 13.5663 1.5659Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </span>
                        <h4>Free Shipping</h4>
                        <p>Free Shipping for orders over $130</p>
                     </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                     <div class="aqf-shop-feature-item mb-30 text-center">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36" fill="none">
                              <path d="M14.5026 0.75V34.75M14.5025 29.5818L27.5926 23.2238M14.5025 21.0811L27.0315 14.9951M14.5025 12.5811L23.0536 8.41613M15.5402 1.107C14.9282 0.631 14.0783 0.631 13.4663 1.107C10.2363 3.572 0.699204 11.613 0.750204 20.98C0.750204 28.562 6.92127 34.75 14.5203 34.75C22.1193 34.75 28.2902 28.579 28.2902 20.997C28.3072 11.766 18.7532 3.589 15.5402 1.107Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"></path>
                           </svg>
                        </span>
                        <h4>Free Returns</h4>
                        <p>Within 30 days for an exchange.</p>
                     </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                     <div class="aqf-shop-feature-item mb-30 text-center">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                              <path d="M3.88037 24.1954L24.1983 3.87744M16.0757 28.2761L18.116 26.2358M20.6509 23.7037L24.7145 19.6401M0.600098 34.6001H34.6051M3.32265 14.606L14.6123 3.31631C18.2168 -0.288222 20.0191 -0.305224 23.5896 3.2653L31.9378 11.6135C35.5084 15.184 35.4914 16.9863 31.8868 20.5908L20.5972 31.8805C16.9927 35.485 15.1904 35.502 11.6199 31.9315L3.27165 23.5833C-0.298875 20.0128 -0.298875 18.2275 3.32265 14.606Z" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </span>
                        <h4>Flexible Payment</h4>
                        <p>Pay with Multiple Credit Cards</p>
                     </div>
                  </div>
                  <div class="col-xl-3 col-md-6">
                     <div class="aqf-shop-feature-item mb-30 text-center">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                              <path d="M28.7484 25.9603L29.4113 31.3321C29.5813 32.7431 28.0684 33.729 26.8614 32.998L19.7388 28.7652C18.9568 28.7652 18.1919 28.7142 17.4439 28.6122C18.7019 27.1333 19.4498 25.2633 19.4498 23.2403C19.4498 18.4125 15.268 14.5027 10.1003 14.5027C8.12836 14.5027 6.30945 15.0636 4.79653 16.0496C4.74553 15.6246 4.72852 15.1996 4.72852 14.7576C4.72852 7.0228 11.4432 0.75 19.7388 0.75C28.0344 0.75 34.7491 7.0228 34.7491 14.7576C34.7491 19.3475 32.3862 23.4104 28.7484 25.9603Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M19.4491 23.2396C19.4491 25.2626 18.7011 27.1326 17.4432 28.6115C15.7603 30.6515 13.0914 31.9604 10.0995 31.9604L5.66276 34.5953C4.9148 35.0543 3.96284 34.4253 4.06483 33.5583L4.48981 30.2095C2.21192 28.6285 0.75 26.0955 0.75 23.2396C0.75 20.2477 2.34793 17.6128 4.79581 16.0489C6.30874 15.0629 8.12764 14.502 10.0995 14.502C15.2673 14.502 19.4491 18.4118 19.4491 23.2396Z" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </span>
                        <h4>Support Online</h4>
                        <p>24 hours a day, 7 days a week</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- feature area end -->

   </main>

  @include('partials.footer')