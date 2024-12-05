<template>
    <div class="container">
      <main>
        <div class="py-5 text-center">
          <div class="container px-1">
            <img :src="pb3" alt="Example image" style="object-fit: cover; width: 30%; height: 30%;">
          </div>
          &nbsp;
          <h3 class="fw-bold mb-9 text-black-50">ซื้อ Apple Watch Ultra 2</h3>
        </div>
  
        <div class="row g-5">
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-black">ตะกร้าของคุณ</span>
              <span class="badge bg-black rounded-pill">1</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Apple Watch Ultra 2</h6>
                  <small class="text-body-secondary">สีดำ</small>
                </div>
                <span class="text-body-secondary">฿29,900</span>
              </li>
              <li class="list-group-item d-flex justify-content-between bg-body-tertiary">
                <div class="text-success">
                  <h6 class="my-0">โค้ดส่วนลด</h6>
                  <small>(เฉพาะสมาชิก The 1-Card)</small>
                </div>
                <span class="text-success">0</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>จำนวนเงินทั้งสิ้น (THB)</span>
                <strong>฿29,900</strong>
              </li>
            </ul>
  
            <form class="card p-2">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="โค้ดส่วนลด (Promo code)">
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </form>
          </div>
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">ที่อยู่จัดส่งสินค้า (Billing addres)</h4>
            <form class="needs-validation" novalidate="">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">ชื่อจริง (First name)</label>
                  <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
  
                <div class="col-sm-6">
                  <label for="lastName" class="form-label">นามสกุล (Last name)</label>
                  <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
  
                <div class="col-12">
                  <label for="username" class="form-label">บัตรสมาชิก The 1-Card</label>
                  <input type="text" class="form-control" id="username" placeholder="หมายเลขสมาชิก" required="">
                  <div class="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
  
                <div class="col-12">
                  <label for="email" class="form-label">อีเมล์ (E-mail)</label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com">
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
  
                <div class="col-12">
                  <label for="address" class="form-label">ที่อยู่ (Address)</label>
                  <input type="text" class="form-control" id="address" placeholder="" required="">
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
  
                <div class="col-12">
                  <label for="address2" class="form-label">ที่อยู่ 2 (Address 2)</label>
                  <input type="text" class="form-control" id="address2" placeholder="">
                </div>
  
                <div class="col-md-5">
                  <label for="country" class="form-label">จังหวัด (Country)</label>
                  <select class="form-select" id="country" required="">
                    <option value="">กรุณาเลือกจังหวัด...</option>
                    <option>กระบี่</option>
                    <option>กาญจนบุรี</option>
                    <option>กำแพงเพชร</option>
                    <option>ขอนแก่น</option>
                    <option>จันทบุรี</option>
                    <option>ฉะเชิงเทรา</option>
                    <option>ชลบุรี</option>
                    <option>ชัยนาท</option>
                    <option>ชัยภูมิ</option>
                    <option>ชุมพร</option>
                    <option>ตรัง</option>
                    <option>ตาก</option>
                    <option>นครนายก</option>
                    <option>นครปฐม</option>
                    <option>นครพนม</option>
                    <option>นครราชสีมา</option>
                    <option>นครศรีธรรมราช</option>
                    <option>นครสวรรค์</option>
                    <option>นนทบุรี</option>
                    <option>นราธิวาส</option>
                    <option>หนองคาย</option>
                    <option>หนองบัวลำภู</option>
                    <option>ปทุมธานี</option>
                    <option>ประจวบคีรีขันธ์</option>
                    <option>ปราจีนบุรี</option>
                    <option>พะเยา</option>
                    <option>พังงา</option>
                    <option>พัทลุง</option>
                    <option>พิจิตร</option>
                    <option>เพชรบุรี</option>
                    <option>เพชรบูรณ์</option>
                    <option>แม่ฮ่องสอน</option>
                    <option>ยโสธร</option>
                    <option>ระยอง</option>
                    <option>ราชบุรี</option>
                    <option>ลพบุรี</option>
                    <option>ลำปาง</option>
                    <option>ลำพูน</option>
                    <option>เลย</option>
                    <option>ศรีสะเกษ</option>
                    <option>สกลนคร</option>
                    <option>สงขลา</option>
                    <option>สมุทรปราการ</option>
                    <option>สมุทรสงคราม</option>
                    <option>สมุทรสาคร</option>
                    <option>สระแก้ว</option>
                    <option>สระบุรี</option>
                    <option>สิงห์บุรี</option>
                    <option>สุโขทัย</option>
                    <option>สุพรรณบุรี</option>
                    <option>สุราษฎร์ธานี</option>
                    <option>สุรินทร์</option>
                    <option>หนองบัวลำภู</option>
                    <option>อ่างทอง</option>
                    <option>อำนาจเจริญ</option>
                    <option>อุดรธานี</option>
                    <option>อุตรดิตถ์</option>
                    <option>อุบลราชธานี</option>
                    <option>อำนาจเจริญ</option>
                    <option>เชียงราย</option>
                    <option>เชียงใหม่</option>
                    <option>เลย</option>
                    <option>สตูล</option>
                    <option>นครราชสีมา</option>
  
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
  
  
                <div class="col-md-3">
                  <label for="zip" class="form-label">รหัสไปรษณีย์ (Zip Code)</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required="">
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>
  
              <hr class="my-4">
  
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="same-address">
                <label class="form-check-label" for="same-address">ที่อยู่จัดส่งจะเหมือนกับที่อยู่เรียกเก็บเงิน (Shipping
                  address is the same as my billing)
                  address</label>
              </div>
  
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="save-info">
                <label class="form-check-label" for="save-info">บันทึกข้อมูลนี้ไว้สำหรับครั้งต่อไป (Save this information
                  for next time)</label>
              </div>
  
              <hr class="my-4">
  
              <h4 class="mb-3">การชำระเงิน (Payment)</h4>
  
              <div class="my-3">
                <div class="form-check">
                  <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
                  <label class="form-check-label" for="credit">เครดิตการ์ด (Credit card)</label>
                </div>
                <div class="form-check">
                  <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="">
                  <label class="form-check-label" for="debit">เดดิตการ์ด (Debit card)</label>
                </div>
                <div class="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="">
                  <label class="form-check-label" for="paypal">เพย์แพล (Paypal)</label>
                </div>
              </div>
  
              <div class="row gy-3">
                <div class="col-md-6">
                  <label for="cc-name" class="form-label">ชื่อบนบัตร (Name on card)</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                  <small class="text-body-secondary">ชื่อ-นามสกุลจริงบนบัตร (Full name as displayed on card)</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
  
                <div class="col-md-6">
                  <label for="cc-number" class="form-label">หมายเลขบัตร (Credit card number)</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
  
                <div class="col-md-3">
                  <label for="cc-expiration" class="form-label">วันหมดอายุ (Expiration)</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
  
                <div class="col-md-3">
                  <label for="cc-cvv" class="form-label">เลขหลังบัตร (CVV)</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
  
              <hr class="my-4">
  
              <button class="w-100 btn bg-black btn-lg text-white" type="submit"> ดำเนินการสั่งซื้อ (Continue to
                checkout)</button>
            </form>
          </div>
        </div>
      </main>
    </div>
    &nbsp;
    <div class="px-4 py-5 text-center border-bottom bg-black border-black">
  <ul class="nav justify-content-center border-bottom pb-3 mb-3 bg-black" style="border-color: black;">
    <li class="nav-item"><a class="nav-link px-2 text-white-50" href="/iphone">iPhone</a></li>
    <li class="nav-item"><a class="nav-link px-2 text-white-50" href="/ipad">iPad</a></li>
    <li class="nav-item"><a class="nav-link px-2 text-white-50" href="/watch">Watch</a></li>
    <li class="nav-item"><a class="nav-link px-2 text-white-50" href="/mac">Mac</a></li>
    <li class="nav-item"><a class="nav-link px-2 text-white-50" href="/locat">เกี่ยวกับเรา</a></li>
  </ul>
  <p class="text-center text-white bg-black">Blue-Whale Authorized Dealer © 2024 Company, Inc</p>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pb3: require('@/assets/pb3.png'),
      };
    },
  };
  </script>