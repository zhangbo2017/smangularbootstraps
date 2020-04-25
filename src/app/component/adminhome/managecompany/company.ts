export class Company {
    companyid:number;
    companyCode: number;
    companyName: string;
    turnover: string;
    ceo: string;
    boardofdirectors: string;
    listedinskex: string;
    sectorName: string;
    brifewriteup: string;
    stockCode: string;
    companyStatus: string;
  }
  
  export class IpoDetails {
    companyName: string;
    stockExchange: string;
    pricePerShare: number;
    totalNumber: number;
    listedinskex: string;
    // openDateTime: Date;
    openDateTime: string;
    ipoRemarks: string;
  }
  export class CompanyIPO {
    company: Company;
    ipo: IpoDetails;
  }
  