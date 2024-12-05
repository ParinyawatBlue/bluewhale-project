<template>
    <div class="navbar navbar-expand-md bg-black sticky-top container-fluid d-flex justify-content-center align-items-center">
      <ul class="navbar-nav flex-grow-1 d-flex justify-content-center align-items-center">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <svg class="bi" width="24" height="24">
              <use xlink:href="#aperture"></use>
            </svg>
          </a>
        </li>
        <li class="nav-item">
          <h4 class="gradient-watch m-0">Apple Watch Ultra 2</h4>
        </li>
        <li class="nav-item ms-5"> <!-- เพิ่ม ms-3 ที่นี่เพื่อขยับปุ่ม -->
          <div class="d-flex gap-1 justify-content-center lead fw-normal">
            <router-link to="/watchb" class="btn btn-primary rounded-pill px-3">
              ซื้อ
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  <!-- ONE Content-->
  <!-- ONE Content-->
  <!--                                                                   -->
  <div class="position-relative overflow-hidden p-2 p-md-10 m-md-10 text-center bg-black">
    &nbsp;
    &nbsp;
    &nbsp;
  </div>
  <div class="position-relative overflow-hidden p-2 p-md-10 m-md-10 text-center bg-black">
    &nbsp;
    &nbsp;
    &nbsp;
    <div class="container px-2">
      <img :src="w2" class="img-fluid shadow-lg mb-" alt="Example image"
        style="object-fit: cover; width: 50%; height: 50%;">
    </div>
  </div>
  <!-- ONE Content-->
  <!-- ONE Content-->
  <!--                                                                   -->

  <!-- Two Content-->
  <!-- Two Content-->
  <!--                                                                   -->
  <div class="px-4 py-5 text-center border-bottom bg-black border-black">
    <div class="container-fluid p-0 bg-black">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img :src="w3" class="d-block mx-lg-auto img-fluid" style="object-fit: cover; width: 80%; height: 80%;">
        </div>
        <div class="col-lg-4 text-center">
          <h3 class="display-4 fw-bold gradient-watch">Ultra 2 สร้างมาเพื่อความสุดขั้ว</h3>
          <p class="display-6 text-white-50">ตัวเรือนไทเทเนียมดำ 49 มม. ออกแบบสำหรับสภาพแวดล้อมสุดสมบุกสมบัน
            ทั้งยังผ่านการรับรอง EN13319 ซึ่งเป็นมาตรฐานที่ได้รับการยอมรับในระดับสากลสำหรับอุปกรณ์เสริมด้านการดำน้ำ</p>
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
    <h2 class="gradient-watch display-5 fw-bold">แอ็คชั่นได้ทันที</h2>
    &nbsp;
    &nbsp;
    &nbsp;
    <div class="overflow-hidden" style="max-height: 100vh;">
      <div class="container px-5">
        <img :src="w4" class="img-fluid shadow-lg mb-4" alt="Example image" width="30%" height="30%">
      </div>
      <div class="col-lg-5 mx-auto">
        <p class="lead mb-4 text-white-50">ปุ่มแอ็คชั่นที่ปรับแต่งได้ให้คุณควบคุมได้อย่างแม่นยำ
          ไม่ว่าจะเริ่มการออกกำลังกาย กำหนดเซ็กเมนต์ หรือไปสู่ช่วงถัดไป</p>
      </div>
    </div>

    <div class="col-lg-7 mx-auto">
      <div class="px-3 py-4 text-center border-bottom bg-black border-black">
        <h2 class="text-white">แบตเตอรี่ที่ไปได้ไกลขึ้นในทุกเส้นทาง ไม่ว่าจะออกไปท้าทายตัวเองที่ไหน
          คุณก็ไม่ควรต้องมากังวลเรื่องแบตเตอรี่หมด และ Ultra 2
          ก็ออกแบบมาให้ทำงานในสภาพสุดขั้วได้นานขึ้นเพื่อให้คุณเต็มที่ได้สุดทาง4</h2>
      </div>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold text-white">สูงสุด</h4>
            <p class="gradient-watch display-6 fw-bold">36 ชม.</p>
            <h6 class="display-8 fw-bold text-white">เมื่อใช้งานปกติ</h6>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold text-white">สูงสุด</h4>
            <p class="gradient-watch display-6 fw-bold">72 ชม.</p>
            <h6 class="display-8 fw-bold text-white">เมื่อใช้งานปกติในโหมดประหยัดพลังงาน</h6>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold text-white">สูงสุด</h4>
            <p class="gradient-watch display-6 fw-bold">17 ชม.</p>
            <h6 class="display-8 fw-bold text-white">เมื่อออกกำลังกายกลางแจ้งในโหมดประหยัดพลังงาน</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-7 mx-auto">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div>
            <div class="container px-2">
              <img :src="w5" class="img-fluid shadow-lg mb-" alt="Example image"
                style="object-fit: cover; width: 50%; height: 50%;">
            </div>
            <h5 class="display-7 text-white-50">เข็มทิศล้ำๆ ที่พาคุณกลับมาได้เสมอ คุณสมบัติการติดตามการเดินสามารถพาคุณกลับสู่เส้นทางได้โดยการใช้ข้อมูล GPS เพื่อสร้างเส้นทางที่คุณเดินมาโดยอัตโนมัติ ถึงแม้ว่าจะอยู่ในพื้นที่อับสัญญาณก็ตาม และยังสามารถเพิ่มจุดอ้างอิงสำหรับทุกจุดที่น่าสนใจ อย่างจุดเริ่มต้นเทรล หรือพื้นที่ตั้งแคมป์ของคุณ</h5>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <div class="container px-2">
              <img :src="w6" class="img-fluid shadow-lg mb-" alt="Example image"
                style="object-fit: cover; width: 50%; height: 50%;">
            </div>
            <h5 class="display-7 text-white-50">บุกเบิกเส้นทางเทรลของคุณเอง สร้างและบันทึกเส้นทางการเดินและการเดินเขาของคุณเองด้วยการแตะไม่กี่ครั้ง โดยเลือกจากตัวเลือกเส้นทางแบบต่างๆ เช่น ขาเดียว ไปกลับ หรือวนลูป และยังสามารถบอกเส้นทางแบบเลี้ยวต่อเลี้ยวด้วย เรียกได้ว่ามีครบทุกอย่างที่ต้องใช้ในการนำทางอยู่บนข้อมือคุณ</h5>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <div class="container px-2">
              <img :src="w7" class="img-fluid shadow-lg mb-5" alt="Example image"
                style="object-fit: cover; width: 40%; height: 40%;">
            </div>
            <h5 class="display-7 text-white-50">ออกไปเดินป่าขึ้นเขา การออกกำลังกายประเภทการเดินเขาให้คุณติดตามเพซ ระยะทาง ระดับความสูงที่ได้ และแคลอรี่ที่เผาผลาญ โดยสามารถดูว่าคุณไต่ขึ้นมาสูงเท่าไหร่ได้แบบเรียลไทม์ขณะออกกำลังกาย และดูระดับความสูงรวมที่ได้เมื่อสิ้นสุดการออกกำลังกาย</h5>
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
      w2: require('@/assets/w2.jpg'),
      w3: require('@/assets/w3.jpg'),
      w4: require('@/assets/w4.jpg'),
      w5: require('@/assets/w5.jpg'),
      w6: require('@/assets/w6.jpg'),
      w7: require('@/assets/w7.jpg'),
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

.gradient-watch {
  background: linear-gradient(75deg, #fab432, #ffa600);
  /* ระบุเฉดสีที่ต้องการ */
  -webkit-background-clip: text;
  /* รองรับใน Webkit-based browsers */
  color: transparent;
  /* ทำให้ข้อความโปร่งใส เพื่อให้เห็นพื้นหลัง */
  text-shadow: 0 6px 6px rgba(253, 253, 253, 0.3), 0 1px 2px rgba(250, 166, 10, 0);
  /* เพิ่มแสงสะท้อน */
}
</style>