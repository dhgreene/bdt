
module.exports = {

    // REQUIRED: The full URL of the server to which we can append "/$export".
    baseURL: "https://sandbox.dpc.cms.gov/api/v1",

    // REQUIRED: The full URL of the token endpoint
    tokenEndpoint: "https://sandbox.dpc.cms.gov/api/v1/Token/auth",

    // REQUIRED: The registered Client ID
    clientId: "put your macaroon here",
    
    // Set this to false to allow tests to accept self-signed certificates.
    strictSSL: true,

    requiresAuth: true,

    keyid: "put your public key id here",

    // Enter the path to the system-level export endpoint relative to the server
    // root (e.g.: "/$export"). Keep this empty if the server does not support
    // system-level export.
    systemExportEndpoint: "",

    // Enter the path to the patient-level export endpoint relative to the
    // server root (e.g.: "/Patient/$export"). Keep this empty if the server
    // does not support patient-level export.
    patientExportEndpoint: "",

    // Enter the path to the system-level export endpoint relative to the server
    // root (e.g.: "/Group/5/$export"). Please use the id of the group having
    // the least amount of resources. Keep this empty if the server does not
    // support group-level export.
    groupExportEndpoint: "/Group/37eaac8a-829f-49a2-99be-dc952ac1623e/$export",

    // While testing we need to attempt downloading at least one resource type.
    // Please enter the resource type that would be fast to export (because
    // there are not many records of that type). If the server does not support
    // system-level export, please make sure this resource type is accessible
    // through the patient-level or the group-level export endpoint. We use
    // "Patient" by default, just because we presume that it is present on every
    // server.
    fastestResource: "Patient",

    // The Private Key as JWK
    privateKey: "-----BEGIN RSA PRIVATE KEY-----\n" +
        "put your private key here" +
        ".................................................................." +
   "-----END RSA PRIVATE KEY-----\n" ,

    invalidPrivateKey:"xxxxxxx",

    jwkPrivateKey:   { // The Private Key as JWK
        "kty": "EC",
        "crv": "P-384",
        "d": "e8VccpNV6F-uZpGYt_RUq_qJ1jEM1OKtx7QiPUOxAlB9VXn1ialbTTNGpzTSMAhY",
        "x": "CVQvGDquuOoVG2e8MS-WEvMNmr3j6X64SET-Cm2BGENhlPS0AMpZxSiVAh5tfrvv",
        "y": "qLmWeZQeBuiLyjif_7lopX-ea7ws0jB5PqumGJDVK4DXWj4aDJ7CX1fMR8rmwsMo",
        "key_ops": [
        "sign"
    ],
        "ext": true,
        "kid": "457e3b331fa4dfe79591920ac12bccc6",
        "alg": "ES384"
    }
};
