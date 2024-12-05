<template>
  <!-- ONE Content-->
  <!-- ONE Content-->
  <!--                                                                   -->
  <div class="position-relative overflow-hidden p-1 p-md-8 m-md-10 text-center bg-black">
    <div class="container px-1">
      <img :src="p2" class="img-fluid shadow-lg mb-" alt="Example image"
        style="object-fit: cover; width: 2532vh; height: 1000px;">
    </div>
    <div class="display-1 centered-content translate-middle text-center"
      style="position: absolute; top: 70%; left: 50%; transform: translateX(-50%);">
      <h4 class="gradient-text">โอกาสสุดท้ายที่จะได้รับบัตรของขวัญ Apple Store มูลค่า ฿3,400 เมื่อคุณซื้อ iPad Pro
        ข้อเสนอสิ้นสุดในคืนนี้</h4>
      <div class="d-flex gap-1 justify-content-center lead fw-normal">
        <router-link to="/ipadb" class="btn btn-primary rounded-pill px-3">
          ซื้อ
        </router-link>
      </div>
      <h5 class="px-3 fw-normal mb-9 text-white-50">เริ่มต้นที่ ฿37,900</h5>
    </div>
  </div>
  <!-- ONE Content-->
  <!-- ONE Content-->
  <!--                                                                   -->

  <!-- Two Content-->
  <!-- Two Content-->
  <!--                                                                   -->
  <div>
    <div class="container-fluid p-0 bg-black">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img :src="p8" class="d-block mx-lg-auto img-fluid" style="object-fit: cover; width: 100vh; height: 100vh;">
        </div>
        <div class="col-lg-4 text-center">
          <h3 class="display-4 fw-bold gradient-text">บางสุดพลัง</h3>
          <p class="display-6 text-white-50">iPad Pro แบบใหม่หมดอัดแน่นด้วยขุมพลังอันน่าทึ่ง
            ในดีไซน์บางเบาและพกพาสะดวกเกินคาด พร้อมขยายขีดจำกัดให้กับความเป็นไปได้บน iPad กับรุ่น 11 นิ้ว
            ที่พกพาง่ายสุดๆ และรุ่น 13 นิ้ว ที่ใหญ่เต็มตาซึ่งถือเป็น</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Two Content-->
  <!-- Two Content-->
  <!--                                                                   -->

  <!-- Three Content-->
  <!-- Three Content-->
  <!--                                                                   -->

  <div class="px-3 py-4 text-center border-bottom bg-black border-black">
    <h2 class="gradient-text display-5 fw-bold">จอภาพที่ล้ำหน้าที่สุดของเรา</h2>
    <div class="overflow-hidden" style="max-height: 100vh;">
      <div class="container px-5">
        <img :src="p9" class="img-fluid shadow-lg mb-4" alt="Example image" width="70%" height="70%">
      </div>
      <div class="col-lg-5 mx-auto">
        <p class="lead mb-4 text-white-50">จอภาพ Ultra Retina XDR ใหม่ กับครั้งแรกของเทคโนโลยี OLED สองชั้นสุดล้ำ
          ที่ให้ความสว่างขั้นสุดและคอนทราสต์ที่แม่นยำเหลือเชื่อ รวมทั้งเทคโนโลยีสุดล้ำหน้าอย่าง ProMotion และ True Tone
          ที่ให้คุณสัมผัสกับประสบการณ์ด้านภาพแบบที่จะต้องตะลึง
          และคุณยังสามารถใช้โหมดการอ้างอิงเพื่อให้เวิร์กโฟลว์มีสีสันที่ถูกต้องได้อีกด้วย</p>
      </div>
    </div>

    <div class="col-lg-7 mx-auto">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold text-white">ความสว่างแบบเต็มหน้าจอ</h4>
            <p class="gradient-text display-6 fw-bold">1,000 นิต</p>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold text-white">ความสว่าง HDR สูงสุดเฉพาะจุด</h4>
            <p class="gradient-text display-6 fw-bold">1,600 นิต</p>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold text-white">อัตราส่วนคอนทราสต์</h4>
            <p class="gradient-text display-6 fw-bold">2,000,000:1</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-7 mx-auto">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold text-white">ดูภาพอย่างสบายตาด้วย</h4>
            <p class="gradient-text display-6 fw-bold">True Tone</p>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold text-white">อัตรารีเฟรชแบบปรับได้ตั้งแต่ 10-120Hz ด้วย</h4>
            <p class="gradient-text display-6 fw-bold">ProMotion</p>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold text-white">ขอบเขตสีกว้างแบบ</h4>
            <p class="gradient-text display-6 fw-bold">P3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Three Content-->
  <!-- Three Content-->
  <!--                                                                   -->
  <!-- Four Content-->
  <!-- Four Content-->
  <!--                                                                   -->
  <!-- Four Content-->
  <!-- Four Content-->
  <!--                                                                   -->

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
      p1: require('@/assets/p1.jpg'),
      p2: require('@/assets/p2.jpg'),
      p9: require('@/assets/p9.jpg'),
      m1: require('@/assets/m1.jpg'),
      p6: require('@/assets/p6.jpg'),
      p7: require('@/assets/p7.jpg'),
      p8: require('@/assets/p8.jpg'),
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

.gradient-text {
  background: linear-gradient(75deg, #fcdc51, #216af3);
  /* ระบุเฉดสีที่ต้องการ */
  -webkit-background-clip: text;
  /* รองรับใน Webkit-based browsers */
  color: transparent;
  /* ทำให้ข้อความโปร่งใส เพื่อให้เห็นพื้นหลัง */
  text-shadow: 0 6px 6px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(10, 94, 250, 0);
  /* เพิ่มแสงสะท้อน */
}
</style>