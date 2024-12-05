<template>
  <!-- ONE Content-->
  <!-- ONE Content-->
  <!--                                                                   -->
  <div class="position-relative overflow-hidden p-1 p-md-8 m-md-10 text-center bg-black">
    <div class="container px-1">
      <img :src="p1" class="img-fluid shadow-lg mb-" alt="Example image"
        style="object-fit: cover; width: 2532vh; height: 1000px;">
    </div>
    <div class="centered-content translate-middle text-center">
      <h4 class="gradient-text-with-shadow fw-normal mb-9 text-white-50">เลือกซื้อ iPhone ที่คุณชอบ จ่ายดอกเบี้ย 0%
        นานสูงสุด 10 เดือน</h4>
        <div class="d-flex gap-1 justify-content-center lead fw-normal">
        <router-link to="/iphoneb" class="btn btn-primary rounded-pill px-3">
          ซื้อ
        </router-link>
      </div>
      &nbsp;
      <h5 class="fw-normal mb-9 text-white-50">เริ่มต้นที่ ฿39,900</h5>
    </div>
  </div>
  <!-- ONE Content-->
  <!-- ONE Content-->
  <!--                                                                   -->
  <!-- Two Content-->
  <!-- Two Content-->
  <!--                                                                   -->
  <div class="px-4 py-5 text-center border-bottom bg-black border-black">
    <h2 class="gradient-text-with-shadow display-5 fw-bold">การผสมเสียง เพราะเสียงของคุณมีความหมาย</h2>
    <div class="col-lg-7 mx-auto">
      <p class="lead mb-4 text-white-50">
        คุณสมบัติการผสมเสียงที่ขับเคลื่อนด้วยระบบอัจฉริยะล้ำสมัยและการบันทึกเสียงเชิงมิติพื้นที่ให้คุณปรับลักษณะของเสียงพูดในวิดีโอของคุณโดยใช้ตัวเลือกเสียงพูดที่ต่างกัน
        3 แบบ ไม่ว่าจะอยากลดความดังของเสียงรอบข้าง หรือโฟกัสไปที่เสียงพูดที่อยู่ในเฟรม
        ก็เพียงแค่เลือกรูปแบบการผสมเสียงแล้วปรับความเข้มเพื่อให้ได้เสียงอย่างที่ต้องการหลังจากถ่ายวิดีโอเสร็จแล้วเท่านั้นเอง
      </p>
    </div>
    <div class="overflow-hidden" style="max-height: 30vh;">
      <div class="container px-5">
        <img :src="p3" class="img-fluid shadow-lg mb-4" alt="Example image" width="700" height="500">
      </div>
    </div>
    <div class="col-lg-7 mx-auto">
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold gradient-text-with-shadow">สตูดิโอ</h4>
            <div class="border-bottom border-white"></div>
            &nbsp;
            <p class="text-white-50">
              ปรับเสียงพูดให้เหมือนกับคุณกำลังบันทึกเสียงในสตูดิโอระดับมืออาชีพที่ติดตั้งผนังสำหรับซับเสียง
              ซึ่งเหมาะสำหรับผู้ที่ทำวล็อกหรือพ็อดคาสท์ เพราะเสียงที่คุณบันทึกจะฟังเหมือนกับมีไมโครโฟนจ่ออยู่ใกล้ๆ
              ปากของผู้พูด ถึงแม้จะอยู่ห่างหลายฟุต</p>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold gradient-text-with-shadow">ภายในเฟรม</h4>
            <div class="border-bottom border-white"></div>
            &nbsp;
            <p class="text-white-50">บันทึกเฉพาะเสียงของคนที่อยู่ในกล้อง
              ถึงแม้คนที่อยู่นอกเฟรมกล้องจะพูดอยู่ในขณะบันทึกก็ตาม</p>
          </div>
        </div>

        <div class="col d-flex align-items-start">
          <div>
            <h4 class="display-7 fw-bold gradient-text-with-shadow">ภาพยนตร์</h4>
            <div class="border-bottom border-white"></div>
            &nbsp;
            <p class="text-white-50">บันทึกเสียงพูดทั้งหมดรอบตัวคุณและนำมารวมเข้าด้วยกันที่ด้านหน้าของจอ
              เหมือนกับการปรับเสียงเพื่อใช้ในภาพยนตร์ยังไงอย่างงั้น</p>
          </div>
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
  <div class="px-4 py-5 text-center border-bottom bg-black border-black">
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 text-white-50">
      <div class="feature col ">
        <div class="container px-5">
          <img :src="p4" class="img-fluid shadow-lg mb-4" alt="Example image" width="70%" height="100vh">
        </div>
        &nbsp;
        <h4 class="display-7 fw-bold gradient-text-with-shadow">iPhone 16 Pro Max มีจอภาพ iPhone
          ใหญ่ที่สุดเท่าที่เราเคยมีมา</h4>
      </div>

      <div class="feature col">
        <div class="container px-5">
          <img :src="p5" class="img-fluid shadow-lg mb-4" alt="Example image" width="70%" height="100vh">
        </div>
        &nbsp;
        <h4 class="display-7 fw-bold gradient-text-with-shadow">ขอบจอที่บางที่สุดในบรรดาผลิตภัณฑ์ Apple</h4>
      </div>

      <div class="feature col">
        <div class="container px-5">
          <img :src="p6" class="img-fluid shadow-lg mb-4" alt="Example image" width="70%" height="100vh">
        </div>
        &nbsp;
        <h4 class="display-7 fw-bold gradient-text-with-shadow">4 สีสันที่โดดเด่น ตั้งแต่ไทเทเนียมดำ
          จนถึงไทเทเนียมทะเลทรายใหม่</h4>
      </div>
    </div>
  </div>
  <!-- Three Content-->
  <!-- Three Content-->
  <!--                                                                   -->
  <!-- Four Content-->
  <!-- Four Content-->
  <!--                                                                   -->
  <div class="position-relative overflow-hidden p-1 p-md-8 m-md-10 text-center bg-black border-black">
    <div class="container px-1 border-black">
      <img :src="p7" class="img-fluid shadow-lg mb-" alt="Example image"
        style="object-fit: cover; width: 2532vh; height: 1000px;">
    </div>
    <div class="centered-content translate-middle text-center border-black">
      <h4 class="fw-normal mb-3 text-white-50">iPhone 16 Pro เพิ่มกล้อง 48MP ตัวที่สองให้กับระบบกล้องระดับโปร
        นั่นคือกล้องอัลตร้าไวด์ 48MP ใหม่พร้อมเซ็นเซอร์ Quad-pixel ที่ล้ำหน้ายิ่งขึ้นสำหรับการถ่ายภาพ ProRAW และ HEIF
        ความละเอียดสูงเป็นพิเศษที่ 48MP พร้อมออโต้โฟกัส</h4>
    </div>
  </div>
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
      p3: require('@/assets/p3.jpg'),
      p4: require('@/assets/p4.jpg'),
      p5: require('@/assets/p5.jpg'),
      p6: require('@/assets/p6.jpg'),
      p7: require('@/assets/p7.jpg'),
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