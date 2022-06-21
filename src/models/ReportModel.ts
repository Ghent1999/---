export default interface ReportModel {
  data: ReportResponse[];
}

export interface ReportResponse {
  token: string;
  no: number;
  create_at: string;
  full_name: string;
  tel: string;
  type: string;
  image: string;
  breed: string;
  token_gallery: string;
}

export interface ReportInsert {
  no: number;
  create_at: string;
  full_name: string;
  full_name_owner: string;
  tel: string;
  type: string;
  image: string;
  breed: string;
  token_gallery: string;
}

export default interface ReportDetailResponse {
  token: string;
  no: number;
  create_at: string;
  full_name: string;
  full_name_owner: string;
  tel: string;
  type: string;
  image: string;
  breed: string;
  token_gallery: string;
}
