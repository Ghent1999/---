/* eslint-disable array-callback-return */
import "./Home.css";
import { useEffect, useState } from "react";
import GalleryService from "../../services/GalleryService";
import GalleryDetailResponse from "../../models/GalleryModel";
import Card from "../../components/CardCow";
import "../../feature/ContantGallery/contantgallery.css";
import Banner from "../../components/Banner";

export default function HomePage() {
  const [dataArray, setDataArray] = useState([]);
  const [dataSort, setDateSort] = useState<GalleryDetailResponse[]>();

  useEffect(() => {
    GetDataGallery();
    GetDataGallerySort();
  }, []);

  function GetDataGallery() {
    GalleryService.getAllGallery()
      .then((response: any) => {
        setDataArray(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  function GetDataGallerySort() {
    GalleryService.getAllGallerySort()
      .then((response: any) => {
        setDateSort(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  const Projects = () => {
    return (
      <div className="row show">
        {dataArray.map((item: GalleryDetailResponse, index) => {
          if (index < 4) {
            return <Card project={item} key={`card-${index}`} />;
          }
        }, {})}
      </div>
    );
  };

  return (
    <div className="content-wrapper">
      <div className="container">
        <Banner dataSort={dataSort} />
        <div className="row" data-aos="fade-up">
          <div className="col-lg-3 stretch-card grid-margin">
            <div className="card">
              <div className="card-header bg-primary">
                <h4 className="text-white">เมนูเว็บไซต์ศูนย์การเรียนรู้</h4>
              </div>
              <div className="card-body">
                <ul className="vertical-menu">
                  <li>
                    <a href="/history-learning" rel="noreferrer">
                      ประวัติศูนย์การเรียนรู้โคจันทรเกษมชัยนาท
                    </a>
                  </li>
                  <li>
                    <a href="/person" rel="noreferrer">
                      สมาชิกศูนย์การเรียนรู้โคจันทรเกษม-ชัยนาท
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://eregist.dld.go.th"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ลงทะเบียนโค
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://chainat.chandra.ac.th/images/Documents/2563/pomelo-cruc.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ส้มโอขาวแตงกวา
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 stretch-card grid-margin">
            <div className="card scroll">
              <div className="card-header bg-primary">
                <h3 className="text-white">
                  ข่าวประชาสัมพันธ์จันทรเกษม-ชัยนาท
                </h3>
              </div>
              <div className="card-body ">
                <div className="row ">
                  <div className="col-sm-12 grid-margin">
                    <h2 className="mb-2 font-weight-600">
                      โครงการส่งเสริมการจ้างงานใหม่สำหรับผู้จบการศึกษาใหม่โดยภาครัฐและเอกชน
                      (Co-payment)
                    </h2>
                    <div className="fs-13 mb-2 text-right">
                      <a
                        href="https://chainat.chandra.ac.th/images/doc2021/032.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="mb-0 btn btn-primary col-3">
                          อ่าน
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 grid-margin">
                    <h2 className="mb-2 font-weight-600">
                      โครงการ ลุ้นโชค " ช่วยผู้ปกครอง รับค่าเทอมนักศึกษา สูงสุด
                      5,000 บาท (ห้าพันบาทถ้วน) "
                      สำหรับนักศึกษาชำระค่าเทอมช่องทางผ่านธนาคารกรุงศรี
                    </h2>
                    <div className="fs-13 mb-2 text-right">
                      <a
                        href="https://op.chandra.ac.th/finance/images/file/news/2563/10/N29102563_01.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="mb-0 btn btn-primary col-3">
                          อ่าน
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 grid-margin">
                    <h2 className="mb-2 font-weight-600">
                      โครงการสอนภาษาจีน - อังกฤษ -
                      คอมพิวเตอร์และทักษะวิชาชีพเบื้องต้น ออนไลน์ ฟรี
                    </h2>
                    <div className="fs-13 mb-2 text-right">
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScN7v2YC6tEVT5D6TSUMAbp2q56aZgucOeY231jwHDUUWI-nA/viewform?fbclid=IwAR1ch1fypxxJwYfQHEmW2jdTQDpCsCSJoXsRDYEtrz9MIFHF1zTTKqwWDf8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="mb-0 btn btn-primary col-3">
                          อ่าน
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 grid-margin">
                    <h2 className="mb-2 font-weight-600">
                      การรับเอกสารสำคัญทางการศึกษา
                      สำหรับผู้สำเร็จการศึกษาประจำภาคเรียนที่ 2 ปีการศึกษา 2562
                    </h2>
                    <div className="fs-13 mb-2 text-right">
                      <a
                        href="http://reg.chandra.ac.th/registrar/download/grad2562.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="mb-0 btn btn-primary col-3">
                          อ่าน
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 grid-margin">
                    <h2 className="mb-2 font-weight-600">
                      กำหนดรับรายงานตัวนักศึกษาใหม่ ประจำปีการศึกษา 2563
                    </h2>
                    <div className="fs-13 mb-2 text-right">
                      <a
                        href="https://chainat.chandra.ac.th/images/open2563.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="mb-0 btn btn-primary col-3">
                          อ่าน
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 grid-margin">
                    <h2 className="mb-2 font-weight-600">
                      นักศึกษาที่สำเร็จการศึกษาประจำปีการศึกษา 2562
                      เข้าร่วมกิจกรรมผ่านระบบออนไลน์
                    </h2>
                    <div className="fs-13 mb-2 text-right">
                      <a
                        href="http://cad.chandra.ac.th/final-chandra/?fbclid=IwAR1I9jH03wzC95pwXNLHtVMPIfJGgB0wYUzzpLVciGmyrw8KTbmNG_NWBlc"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="mb-0 btn btn-primary col-3">
                          อ่าน
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 grid-margin">
                    <h2 className="mb-2 font-weight-600">
                      โครงการประกวดทำคลิปเผยแพร่มารยาทไทยแก้ปัญหาจราจร
                    </h2>
                    <div className="fs-13 mb-2 text-right">
                      <a
                        href="https://chainat.chandra.ac.th/images/jl63.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="mb-0 btn btn-primary col-3">
                          อ่าน
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 stretch-card grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="row show">
                  <Projects />
                  <div className="col-12 mt-5 text-center">
                    <a href="/gallery">
                      <button type="button" className="btn btn-primary btn-lg">
                        Read More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
