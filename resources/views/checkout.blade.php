@include('partials.header')
   <main>
     

      <!-- checkout area start -->
      <section class="aq-checkout-area pb-120 pt-100">
         <div class="container">
            <div class="row">
               <div class="col-xl-7 col-lg-7">
                  <div class="aq-checkout-verify">
                     <div class="aq-checkout-verify-item">
                        <p class="aq-checkout-verify-reveal">
                           Returning customer? <button type="button" class="aq-checkout-login-form-reveal-btn">Click here to login</button>
                        </p>
                        <div id="aqReturnCustomerLoginForm" class="aq-return-customer">
                           <form action="#">
                              <div class="aq-return-customer-input">
                                 <label>Email</label>
                                 <input type="text" placeholder="Your Email">
                              </div>
                              <div class="aq-return-customer-input">
                                 <label>Password</label>
                                 <input type="password" placeholder="Password">
                              </div>
                              <div class="aq-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                                 <div class="aq-return-customer-remeber">
                                    <input id="remebers" type="checkbox">
                                    <label for="remebers">Remember me</label>
                                 </div>
                                 <div class="aq-return-customer-forgot">
                                    <a href="#">Forgot Password?</a>
                                 </div>
                              </div>
                              <button type="submit" class="aq-return-customer-btn aq-checkout-btn">Login</button>
                           </form>
                        </div>
                     </div>
                     <div class="aq-checkout-verify-item">
                        <p class="aq-checkout-verify-reveal">
                           Have a coupon? <button type="button" class="aq-checkout-coupon-form-reveal-btn">Click here to enter your code</button>
                        </p>
                        <div id="aqCheckoutCouponForm" class="aq-return-customer">
                           <form action="#">
                              <div class="aq-return-customer-input">
                                 <label>Coupon Code :</label>
                                 <input type="text" placeholder="Coupon">
                              </div>
                              <button type="submit" class="aq-return-customer-btn aq-checkout-btn">Apply</button>
                           </form>
                        </div>
                     </div>
                  </div>

                  <div class="aq-checkout-bill-area">
                     <h3 class="aq-checkout-bill-title">Billing Details</h3>
                     <div class="aq-checkout-bill-form">
                        <form action="#">
                           <div class="aq-checkout-bill-inner">
                              <div class="row">
                                 <div class="col-md-12">
                                    <div class="aq-checkout-input">
                                       <label>Full Name <span>*</span></label>
                                       <input id="checkoutFullName" type="text" placeholder="Your name" required>
                                    </div>
                                 </div>

                                 <div class="col-md-12">
                                    <div class="aq-checkout-input">
                                       <label>Phone <span>*</span></label>
                                       <input id="checkoutMobile" type="tel" placeholder="+91 98765 43210" pattern="[+]?[6-9][0-9]{9,14}" title="Please enter a valid phone number starting with 6-9 (Indian: +91 6-9xxxxxxx)" required>
                                    </div>
                                 </div>

                                 <div class="col-md-12">
                                    <div class="aq-checkout-input">
                                       <label>Email address</label>
                                       <input id="checkoutEmail" type="email" placeholder="email@address.com">
                                    </div>
                                 </div>

                                 <div class="col-md-12">
                                    <div class="aq-checkout-input">
                                       <label>Postcode ZIP / Pincode <span>*</span></label>
                                       <input id="checkoutPincode" type="text" placeholder="e.g. 110001" pattern="[0-9]{6}" title="Please enter a valid 6-digit pincode" required>
                                    </div>
                                 </div>

                                 <div class="col-md-12">
                                    <div class="aq-checkout-input">
                                       <label>Full Address <span>*</span></label>
                                       <textarea id="checkoutAddress" placeholder="House No, Street, Area, City, State" required></textarea>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>

               <div class="col-lg-5">
                  <!-- checkout place order -->
                  <div class="aq-checkout-place white-bg">
                     <h3 class="aq-checkout-place-title">Your Order</h3>

                     <div class="aq-order-info-list">
                        <ul>
                           <li class="aq-order-info-list-header">
                              <h4>Product</h4>
                              <h4>Total</h4>
                           </li>

                           <li class="aq-order-info-list-desc">
                              <p>{{ $package->name }}</span></p>
                              <span>{{ $package->amount }}</span>
                           </li>
                          

                           <li class="aq-order-info-list-total">
                              <span>Total</span>
                              <span>{{ $package->amount }}</span>
                           </li>
                        </ul>
                     </div>

                     <div class="aq-checkout-btn-wrapper">
                        <button id="placeOrderBtn" type="button" class="aq-checkout-btn w-100">Continue to Payment</button>
                     </div>

                     <div id="paymentSection" style="display:none; margin-top: 20px;">
                        <div class="aq-checkout-payment">
                           <div class="aq-checkout-payment-item">
                              <label style="display:block; margin-bottom: 10px; font-weight: 600;">Payment Mode</label>
                              <p class="mb-0" style="color: rgba(15,15,15,0.8);">
                                 Choose how you want to pay. For USDT/ANB, please complete payment within 5 minutes.
                              </p>
                           </div>

                           <div class="aq-checkout-payment-item">
                              <div class="d-flex flex-wrap" style="gap: 14px;">
                                 <label class="d-inline-flex align-items-center" style="gap:8px; cursor:pointer;">
                                    <input type="radio" name="payMode" value="INR">
                                    <span>INR</span>
                                 </label>
                                 <label class="d-inline-flex align-items-center" style="gap:8px; cursor:pointer;">
                                    <input type="radio" name="payMode" value="USDT">
                                    <span>USDT</span>
                                 </label>
                                 <label class="d-inline-flex align-items-center" style="gap:8px; cursor:pointer;">
                                    <input type="radio" name="payMode" value="ANB">
                                    <span>ANB</span>
                                 </label>
                                 <label class="d-inline-flex align-items-center" style="gap:8px; cursor:pointer;">
                                    <input type="radio" name="payMode" value="EARNINGS">
                                    <span>Rienna Wallet</span>
                                 </label>
                              </div>
                           </div>
                        </div>

                        <div id="earningsBox" style="display:none;">
                           <div style="border:1px solid #eee; border-radius:12px; padding:16px;">
                              <h5 class="mb-10">Pay with Rienna Wallet</h5>
                              <p class="mb-10">Rienna Wallet Balance: <b id="earningsBalanceText">$0.00</b></p>
                              <p class="mb-0">Amount to pay: <b id="earningsPayAmount">$0.00</b></p>
                              <p id="earningsNote" class="mt-10 mb-0" style="color: rgba(15,15,15,0.75); font-size: 13px;">
                                 Only Rienna Wallet balance can be used for purchases.
                              </p>
                           </div>
                        </div>

                        <div id="inrBox" style="display:none; margin-top: 15px;">
                           <div style="border:1px solid #eee; border-radius:12px; padding:16px;">
                              <h5 class="mb-10">Pay in INR (UPI)</h5>
                              <p class="mb-10">UPI ID: <b id="upiIdText">9576977232@ptsbi</b></p>
                              <p class="mb-15">Amount: <b id="inrAmountText">₹0</b></p>
                              <div class="row mt-15">
                                 <div class="col-md-4 mb-15">
                                    <div style="width:100%; aspect-ratio: 1 / 1; border:1px solid #ddd; border-radius:12px; display:flex; align-items:center; justify-content:center; background:#fff; overflow:hidden;">
                                       <img id="upiQrImage" src="" alt="UPI QR Code" style="width:100%; height:100%; object-fit:contain;">
                                    </div>
                                    <p style="text-align:center; font-size:12px; color:rgba(15,15,15,0.7); margin-top:8px;">Scan with any UPI app</p>
                                 </div>
                                 <div class="col-md-8 mb-15">
                                    <a id="upiPayLink" href="#" class="aq-btn-black btn-red-bg radius-30">Pay via UPI App</a>
                                    <p style="margin-top:10px; font-size:13px; color:rgba(15,15,15,0.75);">Or scan the QR code using Google Pay, PhonePe, Paytm or any UPI app</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div id="cryptoBox" style="display:none; margin-top: 15px;">
                           <div style="border:1px solid #eee; border-radius:12px; padding:16px;">
                              <div class="d-flex flex-wrap justify-content-between align-items-center" style="gap:10px;">
                                 <div>
                                    <h5 class="mb-5">Scan &amp; Pay</h5>
                                    <p class="mb-0" style="color: rgba(15,15,15,0.8);">Network: <b id="cryptoNetworkText">USDT</b></p>
                                 </div>
                                 <div style="text-align:right;">
                                    <div style="font-size:12px; color: rgba(15,15,15,0.8);">Time left</div>
                                    <div id="payTimer" style="font-size:18px; font-weight:700;">05:00</div>
                                 </div>
                              </div>

                              <div class="row mt-15">
                                 <div class="col-md-4 mb-15">
                                    <div style="width:100%; aspect-ratio: 1 / 1; border:1px dashed #ddd; border-radius:12px; display:flex; align-items:center; justify-content:center; background:#faf9f8;">
                                       <div style="text-align:center; padding:10px;">
                                          <div style="font-weight:700; margin-bottom:6px;">QR</div>
                                          <div style="font-size:12px; color: rgba(15,15,15,0.7);">Scan to pay</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-8 mb-15">
                                    <p class="mb-10">Wallet Address</p>
                                    <input id="cryptoAddress" class="aq-form-control" type="text" readonly value="0x0000000000000000000000000000000000000000">
                                    <div class="d-flex flex-wrap gap-2 mt-10">
                                       <button id="copyCryptoAddress" type="button" class="aq-btn-black border-btn radius-30">Copy Address</button>
                                       <button id="restartTimerBtn" type="button" class="aq-btn-black radius-30">Restart 5:00</button>
                                    </div>
                                    <p id="timerNote" class="mt-10 mb-0" style="color: rgba(15,15,15,0.75); font-size: 13px;">
                                       Please complete payment before timer ends.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="aq-checkout-btn-wrapper" style="margin-top: 15px;">
                           <button id="confirmOrderBtn" type="button" class="aq-checkout-btn w-100" disabled>Confirm Order</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- checkout area end -->
   </main>

 @include('partials.footer')

 <script>
      (function () {
         var subtotalUSD = 74.0;
         var upiId = '9576977232@ptsbi';
         var usdToInr = 97.0; // demo conversion rate
         var DASHBOARD_STORAGE_KEY = 'rienna_dashboard_v1';

         function val(id) {
            var el = document.getElementById(id);
            return (el && el.value ? el.value : '').trim();
         }

         var btn = document.getElementById('placeOrderBtn');
         if (!btn) return;

         var paymentSection = document.getElementById('paymentSection');
         var confirmBtn = document.getElementById('confirmOrderBtn');
         var inrBox = document.getElementById('inrBox');
         var cryptoBox = document.getElementById('cryptoBox');
         var earningsBox = document.getElementById('earningsBox');
         var earningsBalanceText = document.getElementById('earningsBalanceText');
         var earningsPayAmount = document.getElementById('earningsPayAmount');
         var earningsNote = document.getElementById('earningsNote');
         var payTimerEl = document.getElementById('payTimer');
         var cryptoNetworkText = document.getElementById('cryptoNetworkText');
         var timerNote = document.getElementById('timerNote');
         var cryptoAddressEl = document.getElementById('cryptoAddress');
         var copyCryptoBtn = document.getElementById('copyCryptoAddress');
         var restartTimerBtn = document.getElementById('restartTimerBtn');
         var upiIdText = document.getElementById('upiIdText');
         var inrAmountText = document.getElementById('inrAmountText');
         var upiPayLink = document.getElementById('upiPayLink');

         var timerInterval = null;
         var timerEndsAt = null;
         var selectedMode = null;

         function readDashboardState() {
            try {
               var raw = window.localStorage.getItem(DASHBOARD_STORAGE_KEY);
               if (!raw) return null;
               return JSON.parse(raw);
            } catch (e) {
               return null;
            }
         }

         function writeDashboardState(state) {
            try {
               window.localStorage.setItem(DASHBOARD_STORAGE_KEY, JSON.stringify(state));
            } catch (e) {}
         }

         function addOrderToDashboard(order) {
            var state = readDashboardState() || {};
            state.orders = Array.isArray(state.orders) ? state.orders : [];
            state.orders.unshift(order);
            writeDashboardState(state);
         }

         function deductEarningsFromDashboard(amount) {
            var state = readDashboardState() || {};
            if (typeof state.earningsBalance !== 'number') state.earningsBalance = 0;
            if (typeof state.spentFromEarnings !== 'number') state.spentFromEarnings = 0;
            state.earningsBalance = state.earningsBalance - amount;
            state.spentFromEarnings = state.spentFromEarnings + amount;
            writeDashboardState(state);
         }

         function getEarningsBalance() {
            var state = readDashboardState();
            return state && typeof state.earningsBalance === 'number' ? state.earningsBalance : 0;
         }

         function clearTimer() {
            if (timerInterval) window.clearInterval(timerInterval);
            timerInterval = null;
            timerEndsAt = null;
         }

         function formatTime(totalSeconds) {
            var m = Math.floor(totalSeconds / 60);
            var s = totalSeconds % 60;
            return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
         }

         function setTimer(seconds) {
            clearTimer();
            timerEndsAt = Date.now() + seconds * 1000;
            function tick() {
               var left = Math.max(0, Math.ceil((timerEndsAt - Date.now()) / 1000));
               payTimerEl.textContent = formatTime(left);
               if (left <= 0) {
                  window.clearInterval(timerInterval);
                  timerInterval = null;
                  confirmBtn.disabled = true;
                  timerNote.textContent = 'Timer expired. Restart the timer and complete payment again.';
                  timerNote.style.color = '#DA3F3F';
               }
            }
            tick();
            timerInterval = window.setInterval(tick, 250);
         }

         function setMode(mode) {
            selectedMode = mode;
            confirmBtn.disabled = false;
            timerNote.style.color = 'rgba(15,15,15,0.75)';

            // Reset views
            inrBox.style.display = 'none';
            cryptoBox.style.display = 'none';
            if (earningsBox) earningsBox.style.display = 'none';
            clearTimer();

            if (mode === 'INR') {
               var inr = Math.round(subtotalUSD * usdToInr);
               upiIdText.textContent = upiId;
               inrAmountText.textContent = '₹' + inr;
               // Generate unique transaction ID
               var transactionId = 'RIN-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
               // Basic UPI deeplink with transaction ID
               var upiLink = 'upi://pay?pa=' +
                  encodeURIComponent(upiId) +
                  '&pn=' +
                  encodeURIComponent('Rienna') +
                  '&am=' +
                  encodeURIComponent(String(inr)) +
                  '&cu=' +
                  encodeURIComponent('INR') +
                  '&tr=' +
                  encodeURIComponent(transactionId) +
                  '&tn=' +
                  encodeURIComponent('Rienna Order ' + transactionId);
               upiPayLink.href = upiLink;
               // Generate UPI QR Code
               var upiQrImage = document.getElementById('upiQrImage');
               if (upiQrImage) {
                  upiQrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=' + encodeURIComponent(upiLink);
               }
               inrBox.style.display = '';
            } else if (mode === 'USDT' || mode === 'ANB') {
               cryptoNetworkText.textContent = mode;
               // Demo address - replace later with real wallet addresses
               cryptoAddressEl.value =
                  mode === 'USDT'
                     ? '0x1111111111111111111111111111111111111111'
                     : '0x2222222222222222222222222222222222222222';
               cryptoBox.style.display = '';
               setTimer(5 * 60);
               timerNote.textContent = 'Please complete payment before timer ends.';
            } else if (mode === 'EARNINGS') {
               var balance = getEarningsBalance();
               if (earningsBalanceText) earningsBalanceText.textContent = '$' + balance.toFixed(2);
               if (earningsPayAmount) earningsPayAmount.textContent = '$' + subtotalUSD.toFixed(2);
               if (earningsNote) {
                  if (balance >= subtotalUSD) {
                     earningsNote.textContent = 'Your earnings balance is sufficient. Confirm to place the order.';
                     earningsNote.style.color = 'rgba(15,15,15,0.75)';
                     confirmBtn.disabled = false;
                  } else {
                     earningsNote.textContent = 'Insufficient earnings balance. Please choose INR/USDT/ANB.';
                     earningsNote.style.color = '#DA3F3F';
                     confirmBtn.disabled = true;
                  }
               }
               earningsBox.style.display = '';
            }
         }

         // Step 1: Validate address + move to payment
         btn.addEventListener('click', function () {
            var fullName = val('checkoutFullName');
            var mobile = val('checkoutMobile');
            var pincode = val('checkoutPincode');
            var address = val('checkoutAddress');

            if (!fullName || !mobile || !pincode || !address) {
               alert('Please fill Full Name, Mobile Number, Pincode and Full Address before placing the order.');
               return;
            }

            // Validate phone number (must start with 6-9 for Indian numbers, 10-15 digits total)
            var cleanMobile = mobile.replace(/\s/g, '');
            var phoneRegex = /^[+]?[6-9][0-9]{9,14}$/;
            if (!phoneRegex.test(cleanMobile)) {
               alert('Please enter a valid phone number starting with 6-9 (Example: +91 9876543210)');
               return;
            }
            
            // Additional check for sequential numbers
            var digitsOnly = cleanMobile.replace(/[^0-9]/g, '');
            if (digitsOnly.includes('1234567890') || digitsOnly.includes('0123456789') || digitsOnly.includes('1111111111') || digitsOnly.includes('2222222222') || digitsOnly.includes('3333333333') || digitsOnly.includes('4444444444') || digitsOnly.includes('5555555555') || digitsOnly.includes('6666666666') || digitsOnly.includes('7777777777') || digitsOnly.includes('8888888888') || digitsOnly.includes('9999999999')) {
               alert('Please enter a real phone number, not sequential or repeated digits');
               return;
            }

            // Validate pincode (exactly 6 digits for India)
            var pincodeRegex = /^[0-9]{6}$/;
            if (!pincodeRegex.test(pincode.replace(/\s/g, ''))) {
               alert('Please enter a valid 6-digit pincode');
               return;
            }

            paymentSection.style.display = '';
            // Scroll to payment area
            paymentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
         });

         // Payment mode selection
         Array.prototype.slice.call(document.querySelectorAll('input[name="payMode"]')).forEach(function (radio) {
            radio.addEventListener('change', function () {
               setMode(radio.value);
            });
         });

         // Copy crypto address
         if (copyCryptoBtn) {
            copyCryptoBtn.addEventListener('click', function () {
               try {
                  navigator.clipboard.writeText(cryptoAddressEl.value);
                  alert('Address copied.');
               } catch (e) {
                  alert('Copy failed. Please copy manually.');
               }
            });
         }

         // Restart timer
         if (restartTimerBtn) {
            restartTimerBtn.addEventListener('click', function () {
               if (selectedMode === 'USDT' || selectedMode === 'ANB') {
                  confirmBtn.disabled = false;
                  timerNote.style.color = 'rgba(15,15,15,0.75)';
                  setTimer(5 * 60);
                  timerNote.textContent = 'Please complete payment before timer ends.';
               }
            });
         }

         // Confirm order after payment selection
         if (confirmBtn) {
            confirmBtn.addEventListener('click', function () {
               if (!selectedMode) {
                  alert('Please select a payment mode.');
                  return;
               }
               // For crypto, block if timer expired
               if ((selectedMode === 'USDT' || selectedMode === 'ANB') && timerEndsAt && Date.now() > timerEndsAt) {
                  alert('Payment timer expired. Please restart the timer and complete payment.');
                  return;
               }

               // Sync order to dashboard
               var order = {
                  id: '#RIN-' + Math.floor(1000 + Math.random() * 9000),
                  date: new Date().toISOString().slice(0, 10),
                  items: 3,
                  amount: subtotalUSD,
                  status: selectedMode === 'EARNINGS' ? 'Paid (Earnings)' : 'Paid (' + selectedMode + ')'
               };

               if (selectedMode === 'EARNINGS') {
                  var bal = getEarningsBalance();
                  if (bal < subtotalUSD) {
                     alert('Insufficient earnings balance. Please choose INR/USDT/ANB.');
                     return;
                  }
                  deductEarningsFromDashboard(subtotalUSD);
               }

               addOrderToDashboard(order);

               alert('Order placed successfully!');
               window.location.href = '/';
            });
         }
      })();
   </script>