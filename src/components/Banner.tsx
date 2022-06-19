import GalleryDetailResponse from "../models/GalleryModel";

interface BannerProps {
  dataSort: GalleryDetailResponse[] | undefined;
}

export default function Banner({ dataSort }: BannerProps) {
  return (
    <div className="row" data-aos="fade-up">
      <div className="col-xl-8 stretch-card grid-margin">
        <div className="position-relative">
          <img
            src="assets/images/วัวไทย.jpeg"
            alt="วัวไทย"
            width="1450"
            height="820"
            className="img-fluid"
          />
          <div className="banner-content">
            <div className="badge badge-danger fs-12 font-weight-bold mb-3">
              วัดเสมียนนารี - จันทรเกษมชัยนาท
            </div>
            <h1 className="mb-5 fs-16 text-white bg-dark">
              - เป็นฐานข้อมูลภาพโคแบบเปิด (Cow Open Dataset) โดยรวบรวมจากโค 28
              ตัว ของมหาวิทยาลัยราชภัฏจันทรเกษม-ชัยนาท -
              สามารถนำไปใช้ในการทำวิจัยได้ฟรี ตาม Creative Commons
              ของศูนย์การเรียนรู้โคจันทรเกษม-ชัยนาท
            </h1>
          </div>
        </div>
      </div>
      <div className="col-xl-4 stretch-card grid-margin">
        <div className="card bg-dark text-white">
          <div className="card-body">
            <h2>ข้อมูลวัวล่าสุด</h2>
            {dataSort?.map((item: GalleryDetailResponse, index) => {
              if (index < 3) {
                return (
                  <div
                    className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                    key={item.id}
                  >
                    <div className="pr-3 textDetail">
                      <h5>
                        <div>{item.full_name} </div>
                        <div>{item.create_at} </div>
                      </h5>
                      <div className="fs-12"></div>
                    </div>
                    <div className="rotate-img">
                      <img
                        src={item.image}
                        alt="thumb"
                        className="img-fluid img-lg"
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
