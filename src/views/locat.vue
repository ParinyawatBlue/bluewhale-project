<template>
  <div class="px-4 py-5 text-center border-bottom bg-black border-black">
    <h2 class="display-6 fw-bold text-white">เกี่ยวกับ Blue-Whale Authorized Dealer</h2>
    <div class="col-lg-7 mx-auto">
      <p class="lead mb-4 text-white-50">
        Blue-Whale Authorized Dealer จำหน่ายสินค้าแอปเปิ้ล สินค้าไอที และ อุปกรณ์เสริมต่างๆ รวมทั้งอุปกรณ์ไลฟ์สไตล์ ที่ทันสมัยอีกมากมาย การันตีคุณภาพสินค้าจากผู้ผลิตโดยตรง พร้อมโปรโมชั่นสินค้าราคาพิเศษ ที่สะดวกและง่ายกับการชำระค่าสินค้า ทุกรูปแบบ เช่น ชำระผ่านบัตรเครดิต, เคาท์เตอร์บริการ, ผ่อนชำระสินค้า หรือเก็บเงินปลายทาง มั่นใจในสินค้าทุกชิ้นจัดส่งปลอดภัยจาก บริษัทขนส่งเอกชน ที่เราไว้วางใจ ที่พร้อมจัดส่งสินค้าอย่างรวดเร็วเท่าที่เราจะปฏิบัติได้
      </p>
    </div>
    <div class="overflow-hidden" style="max-height: 100vh;">
      <div class="container px-5">
        <img :src="loc1" class="img-fluid shadow-lg mb-4" alt="Example image" width="100%" height="100%">
      </div>
    </div>
  </div>
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
      loc1: require('@/assets/loc1.jpg'),
    };
  },
};
</script>

<style>
/* ตั้งพื้นหลังของ body เป็นสีดำ */
body {
  background-color: rgb(0, 0, 0);
  /* พื้นหลังเป็นสีดำ */
  color: white;
  /* ทำให้ข้อความทั้งหมดเป็นสีขาว */
  margin: 0;
  padding: 0;
  border: none;
  /* ลบขอบ */
  outline: none;
  /* ลบขอบเส้นนอก */
}

/* ให้ข้อความอยู่ด้านบนของพื้นหลัง */
.col-md-6 {
  position: relative;
  z-index: 1;
  /* ทำให้ข้อความอยู่ด้านบน */
}

h4,
h5 {
  position: relative;
  z-index: 2;
  /* ทำให้ข้อความอยู่บนพื้นหลัง */
}

.btn {
  z-index: 3;
  /* ทำให้ปุ่มอยู่ด้านบน */
}

/* ให้ .position-relative อยู่ในรูปภาพ */
.position-relative {
  position: relative;
}

/* ให้ข้อความอยู่ตรงกลาง */
.centered-content {
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255);
  /* ทำให้ข้อความเป็นสีขาว */
  z-index: 2;
}

/* ปุ่ม */
.btn {
  z-index: 3;
}

footer,
.nav,
.nav-item,
.nav-link,
p {
  margin: 0;
  /* ลบ margin */
  padding: 0;
  /* ลบ padding */
  border: none;
  /* ลบขอบ */
  outline: none;
  /* ลบขอบเส้นนอก */
  box-sizing: border-box;
  /* ให้คำนวณขนาดรวมขอบและ padding */
}

.gradient-text-with-shadow {
  background: linear-gradient(45deg, #ffffff, #ff6a00);
  /* เฉดสีที่ต้องการ */
  -webkit-background-clip: text;
  /* รองรับใน Webkit-based browsers */
  color: transparent;
  /* ทำให้ข้อความโปร่งใส เพื่อให้เห็นพื้นหลัง */
  text-shadow: 0 6px 6px rgba(255, 187, 59, 0.3), 0 1px 3px rgba(252, 177, 91, 0.2);
  /* เพิ่มแสงสะท้อน */
}
</style>
