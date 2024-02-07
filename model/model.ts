export interface Filter {
    logic: string;
    filters: any[];
}

export interface RequestParams {
    page: number;
    limit: number;
    sortBy: string;
    sortDir: string;
    filter: Filter;
}

export interface GridInput {
   items: Items[];
   total: number;
   totalPages: number;
}

export interface Items {
    _id: string;
    to: string;
    singleToAddress: boolean;
    ccMail: string | null;
    bccMail: string | null;
    body: string;
    subject: string;
    mailConfig: {
        host: string;
        port: number;
        protocol: string;
        encoding: string;
        smtpAuth: boolean;
        tlsEnable: boolean;
        sslEnable: boolean;
        username: string;
        password: string;
        fromName: string;
        _id: string;
    };
    html: boolean;
    attachments: string[];
    createdOn: string;
    deliveredMailIds: string[];
    isSuccess: boolean;
    status: string;
    __v: number;
    sentOn: string;
    deliveredOn: string;
}

