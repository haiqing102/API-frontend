declare namespace API {
  type BaseResponseboolean = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseImageVo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseInterfaceInfo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseListInterfaceInfo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseListProductInfo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseListUserVo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponselong = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseobject = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseOrderVo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageInterfaceInfo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageProductInfo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUserVo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseProductInfo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseProductOrderVo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseUserVo = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type closedProductOrderUsingPostParams = {
    /** orderNo */
    orderNo?: string;
  };

  type deleteProductOrderUsingPostParams = {
    /** id */
    id?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type Field = {
    fieldName?: string;
    value?: string;
  };

  type getCaptchaUsingGetParams = {
    /** email */
    email?: string;
  };

  type getInterfaceInfoByIdUsingGetParams = {
    /** id */
    id?: number;
  };

  type getProductInfoByIdUsingGetParams = {
    /** id */
    id?: number;
  };

  type getProductOrderByIdUsingGetParams = {
    /** id */
    id?: string;
  };

  type getUserByIdUsingGetParams = {
    /** id */
    id?: number;
  };

  type getUserByInvitationCodeUsingPostParams = {
    /** invitationCode */
    invitationCode?: string;
  };

  type IdRequest = {
    id?: number;
  };

  type ImageVo = {
    name?: string;
    status?: string;
    uid?: string;
    url?: string;
  };

  type InterfaceInfo = {
    avatarUrl?: string;
    createTime?: string;
    description?: string;
    id?: number;
    isDelete?: number;
    method?: string;
    name?: string;
    reduceScore?: number;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: string;
    responseHeader?: string;
    responseParams?: string;
    returnFormat?: string;
    status?: number;
    totalInvokes?: number;
    updateTime?: string;
    url?: string;
    userId?: number;
  };

  type InterfaceInfoAddRequest = {
    description?: string;
    method?: string;
    name?: string;
    reduceScore?: number;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: RequestParamsField[];
    responseHeader?: string;
    responseParams?: ResponseParamsField[];
    returnFormat?: string;
    url?: string;
  };

  type InterfaceInfoUpdateAvatarRequest = {
    avatarUrl?: string;
    id?: number;
  };

  type InterfaceInfoUpdateRequest = {
    avatarUrl?: string;
    description?: string;
    id?: number;
    method?: string;
    name?: string;
    reduceScore?: number;
    requestExample?: string;
    requestHeader?: string;
    requestParams?: RequestParamsField[];
    responseHeader?: string;
    responseParams?: ResponseParamsField[];
    returnFormat?: string;
    status?: number;
    url?: string;
  };

  type InvokeRequest = {
    id?: number;
    requestParams?: Field[];
    userRequestParams?: string;
  };

  type listInterfaceInfoByPageUsingGetParams = {
    current?: number;
    description?: string;
    method?: string;
    name?: string;
    pageSize?: number;
    reduceScore?: number;
    'responseParams[0].desc'?: string;
    'responseParams[0].fieldName'?: string;
    'responseParams[0].id'?: string;
    'responseParams[0].type'?: string;
    returnFormat?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type listInterfaceInfoBySearchTextPageUsingGetParams = {
    current?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type listInterfaceInfoUsingGetParams = {
    current?: number;
    description?: string;
    method?: string;
    name?: string;
    pageSize?: number;
    reduceScore?: number;
    'responseParams[0].desc'?: string;
    'responseParams[0].fieldName'?: string;
    'responseParams[0].id'?: string;
    'responseParams[0].type'?: string;
    returnFormat?: string;
    sortField?: string;
    sortOrder?: string;
    status?: number;
    url?: string;
    userId?: number;
  };

  type listProductInfoByPageUsingGetParams = {
    addPoints?: number;
    current?: number;
    description?: string;
    name?: string;
    pageSize?: number;
    productType?: string;
    sortField?: string;
    sortOrder?: string;
    total?: number;
  };

  type listProductInfoBySearchTextPageUsingGetParams = {
    current?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type listProductInfoUsingGetParams = {
    addPoints?: number;
    current?: number;
    description?: string;
    name?: string;
    pageSize?: number;
    productType?: string;
    sortField?: string;
    sortOrder?: string;
    total?: number;
  };

  type listProductOrderByPageUsingGetParams = {
    addPoints?: number;
    current?: number;
    orderName?: string;
    orderNo?: string;
    pageSize?: number;
    payType?: string;
    productInfo?: string;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    total?: number;
  };

  type listUserByPageUsingGetParams = {
    current?: number;
    gender?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userAccount?: string;
    userRole?: string;
    username?: string;
  };

  type listUserUsingGetParams = {
    current?: number;
    gender?: string;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userAccount?: string;
    userRole?: string;
    username?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type OrderVo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    optimizeJoinOfCountSql?: boolean;
    orders?: OrderItem[];
    records?: ProductOrderVo[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageInterfaceInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageProductInfo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVo = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PayCreateRequest = {
    payType?: string;
    productId?: string;
  };

  type ProductInfo = {
    addPoints?: number;
    createTime?: string;
    description?: string;
    expirationTime?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    productType?: string;
    status?: number;
    total?: number;
    updateTime?: string;
    userId?: number;
  };

  type ProductInfoAddRequest = {
    addPoints?: number;
    description?: string;
    expirationTime?: string;
    name?: string;
    productType?: string;
    total?: number;
  };

  type ProductInfoUpdateRequest = {
    addPoints?: number;
    description?: string;
    expirationTime?: string;
    id?: number;
    name?: string;
    productType?: string;
    total?: number;
  };

  type ProductOrderQueryRequest = {
    addPoints?: number;
    current?: number;
    orderName?: string;
    orderNo?: string;
    pageSize?: number;
    payType?: string;
    productInfo?: string;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    total?: number;
  };

  type ProductOrderVo = {
    addPoints?: number;
    codeUrl?: string;
    createTime?: string;
    description?: string;
    expirationTime?: string;
    formData?: string;
    id?: number;
    orderName?: string;
    orderNo?: string;
    payType?: string;
    productId?: number;
    productInfo?: ProductInfo;
    productType?: string;
    status?: string;
    total?: string;
  };

  type RequestParamsField = {
    desc?: string;
    fieldName?: string;
    id?: string;
    required?: string;
    type?: string;
  };

  type ResponseParamsField = {
    desc?: string;
    fieldName?: string;
    id?: string;
    type?: string;
  };

  type uploadFileUsingPostParams = {
    biz?: string;
  };

  type UserAddRequest = {
    balance?: number;
    gender?: string;
    userAccount?: string;
    userAvatar?: string;
    userPassword?: string;
    userRole?: string;
    username?: string;
  };

  type UserBindEmailRequest = {
    captcha?: string;
    email?: string;
  };

  type UserEmailLoginRequest = {
    captcha?: string;
    email?: string;
  };

  type UserEmailRegisterRequest = {
    agreeToAnAgreement?: string;
    captcha?: string;
    email?: string;
    invitationCode?: string;
    username?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserRegisterRequest = {
    agreeToAnAgreement?: string;
    checkPassword?: string;
    invitationCode?: string;
    userAccount?: string;
    userPassword?: string;
    username?: string;
  };

  type UserUnBindEmailRequest = {
    captcha?: string;
    email?: string;
  };

  type UserUpdateRequest = {
    balance?: number;
    gender?: string;
    id?: number;
    status?: number;
    userAccount?: string;
    userAvatar?: string;
    userPassword?: string;
    userRole?: string;
    username?: string;
  };

  type UserVo = {
    accessKey?: string;
    balance?: number;
    createTime?: string;
    email?: string;
    gender?: string;
    id?: number;
    invitationCode?: string;
    secretKey?: string;
    status?: number;
    updateTime?: string;
    userAccount?: string;
    userPassword?: string;
    userAvatar?: string;
    userRole?: string;
    username?: string;
  };
}
