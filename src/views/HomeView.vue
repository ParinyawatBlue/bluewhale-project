<template>

<div class="px-4 py-5 text-center border-bottom bg-black border-black">
    <h5 class="display-6 fw-bold main-text">Blue-Whale Authorized Dealer</h5>
    <div class="col-lg-7 mx-auto">
      <p class="lead mb-4 main-text">เลือกซื้อสินค้าออนไลน์ แล้วรับความช่วยเหลือจาก Specialist พร้อมบริการจัดส่งฟรีและอีกมากมาย</p>
</div>
</div>
<!-- ONE Content-->
<!-- ONE Content-->
 <!--                                                                   -->
  <div class="position-relative overflow-hidden p-1 p-md-8 m-md-10 text-center bg-black">
    <div class="container px-1">
      <img :src="p1" class="img-fluid shadow-lg mb-" alt="Example image" style="object-fit: cover; width: 2532vh; height: 1000px;">
    </div>
    <div class="centered-content translate-middle text-center">
      <h4 class="gradient-text-with-shadow fw-normal mb-9 text-white-50">เลือกซื้อ iPhone ที่คุณชอบ จ่ายดอกเบี้ย 0% นานสูงสุด 10 เดือน</h4>
      <div class="d-flex gap-1 justify-content-center lead fw-normal">
        <!-- ใช้ router-link เพื่อการลิงก์ไปยังหน้าที่ต้องการ -->
        <router-link to="/iphone" class="btn btn-primary rounded-pill px-3">
          ดูเพิ่มเติม
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
 <div class="position-relative overflow-hidden p-1 p-md-8 m-md-10 text-center bg-black">
  <div class="container px-1">
    <img :src="p2" class="img-fluid shadow-lg mb-" alt="Example image" style="object-fit: cover; width: 2532vh; height: 1200px;">
  </div>
  <div class="centered-content translate-middle text-center" style="margin-top: 600px;">
    <h4 class="fw-normal mb-9 gradient-text">โอกาสสุดท้ายที่จะได้รับบัตรของขวัญ Apple Store มูลค่า ฿3,400 เมื่อคุณซื้อ iPad Pro ข้อเสนอสิ้นสุดในคืนนี้</h4>
    &nbsp;
    <div class="d-flex gap-1 justify-content-center lead fw-normal">
        <!-- ใช้ router-link เพื่อการลิงก์ไปยังหน้าที่ต้องการ -->
        <router-link to="/ipad" class="btn btn-primary rounded-pill px-3">
          ดูเพิ่มเติม
        </router-link>
      </div>
    &nbsp;
    <h5 class="fw-normal mb-9 text-white-50">เริ่มต้นที่ ฿37,900</h5>
  </div>
</div>

<!-- Two Content-->
<!-- Two Content-->
 <!--                                                                   -->

 <div class="bg-black d-flex justify-content-center align-items-center">
    <div class="d-md-flex flex-md-equal w-100 text-center bg-black border-black">
      <!-- First section -->
      <div class="text-bg-black me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden d-flex flex-column justify-content-center align-items-center">
        <div class="my-2 py-2">
          <h1 class="fw-normal mb-9 text-white">Watch Ultra 2</h1>
          <p class="fw-normal mb-9 text-white-50">สีสันใหม่ พิชิตความท้าทายใหม่ๆ</p>
          <div class="d-flex gap-1 justify-content-center lead fw-normal">
        <router-link to="/watch" class="btn btn-primary rounded-pill px-3">
          ดูเพิ่มเติม
        </router-link>
      </div>
        </div>
        <img :src="w1" alt="Image" class="img-fluid shadow-sm" style="width: 100%; height: 300px; object-fit: cover; border-radius: 50px 50px 0 0;">
      </div>

      <!-- Second section -->
      <div class="text-bg-black me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden d-flex flex-column justify-content-center align-items-center">
        <div class="my-2 py-2">
          <h1 class="fw-normal mb-9 text-white">MacBook Pro</h1>
          <p class="fw-normal mb-9 text-white-50">อัดฉีดพลังด้วยชิป M4</p>
          <div class="d-flex gap-1 justify-content-center lead fw-normal">
        <router-link to="/mac" class="btn btn-primary rounded-pill px-3">
          ดูเพิ่มเติม
        </router-link>
      </div>
        </div>
        <img :src="m1" alt="Image" class="img-fluid shadow-sm" style="width: 100%; height: 300px; object-fit: cover; border-radius: 50px 50px 0 0;">
      </div>
    </div>
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
  </div>
<!-- Footer -->
<!-- Footer -->
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

<!-- Footer -->
<!-- Footer -->
 <!--                                                                   -->

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      p1: require('@/assets/p1.jpg'),
      p2: require('@/assets/p2.jpg'),
      w1: require('@/assets/w1.jpg'),
      m1: require('@/assets/m1.jpg'),
      p6: require('@/assets/p6.jpg'),
      p7: require('@/assets/p7.jpg'),
    };
  },
};
</script>

<style>
/* ตั้งพื้นหลังของ body เป็นสีดำ */
body {
  background-color: rgb(0, 0, 0); /* พื้นหลังเป็นสีดำ */
  color: white; /* ทำให้ข้อความทั้งหมดเป็นสีขาว */
  margin: 0;
  padding: 0;
  border: none; /* ลบขอบ */
    outline: none; /* ลบขอบเส้นนอก */
}

/* ให้ข้อความอยู่ด้านบนของพื้นหลัง */
.col-md-6 {
  position: relative;
  z-index: 1; /* ทำให้ข้อความอยู่ด้านบน */
}

h4, h5 {
  position: relative;
  z-index: 2; /* ทำให้ข้อความอยู่บนพื้นหลัง */
}

.btn {
  z-index: 3; /* ทำให้ปุ่มอยู่ด้านบน */
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
  color: rgb(255, 255, 255); /* ทำให้ข้อความเป็นสีขาว */
  z-index: 2;
}

/* ปุ่ม */
.btn {
  z-index: 3;
}
footer, .nav, .nav-item, .nav-link, p {
    margin: 0;  /* ลบ margin */
    padding: 0; /* ลบ padding */
    border: none; /* ลบขอบ */
    outline: none; /* ลบขอบเส้นนอก */
    box-sizing: border-box; /* ให้คำนวณขนาดรวมขอบและ padding */
    background-color: black;
  }
  .d-flex {
  display: flex;
  justify-content: center; /* จัดกลางในแนวนอน */
  align-items: center; /* จัดกลางในแนวตั้ง */
  min-height: 50px; /* ทำให้ container มีความสูงเต็มหน้าจอ */
}

.d-md-flex {
  display: flex;
  justify-content: center;
  gap: 50px; /* ช่องว่างระหว่างสอง section */
}

.bg-black {
  background-color: black;
}

.border-black {
  border: 0px solid black;
}
.gradient-text-with-shadow {
  background: linear-gradient(45deg, #ffffff, #f58b3f); /* เฉดสีที่ต้องการ */
  -webkit-background-clip: text; /* รองรับใน Webkit-based browsers */
  color: transparent; /* ทำให้ข้อความโปร่งใส เพื่อให้เห็นพื้นหลัง */
  text-shadow: 0 6px 6px rgba(255, 187, 59, 0.3), 0 1px 3px rgba(252, 177, 91, 0.2); /* เพิ่มแสงสะท้อน */
}
.gradient-text {
  background: linear-gradient(75deg, #fcdc51, #216af3); /* ระบุเฉดสีที่ต้องการ */
  -webkit-background-clip: text; /* รองรับใน Webkit-based browsers */
  color: transparent; /* ทำให้ข้อความโปร่งใส เพื่อให้เห็นพื้นหลัง */
  text-shadow: 0 6px 6px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(10, 94, 250, 0); /* เพิ่มแสงสะท้อน */
}
.main-text {
  background: linear-gradient(75deg, #ffffff, #b6b6b6); /* ระบุเฉดสีที่ต้องการ */
  -webkit-background-clip: text; /* รองรับใน Webkit-based browsers */
  color: transparent; /* ทำให้ข้อความโปร่งใส เพื่อให้เห็นพื้นหลัง */
  text-shadow: 0 8px 8px rgba(255, 184, 32, 0.3), 1 px 2px rgba(10, 94, 250, 0); /* เพิ่มแสงสะท้อน */
}
</style>