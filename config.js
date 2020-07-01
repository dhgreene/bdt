
module.exports = {

    // REQUIRED: The full URL of the server to which we can append "/$export".
    baseURL: "https://sandbox.dpc.cms.gov/api/v1",

    // REQUIRED: The full URL of the token endpoint
    tokenEndpoint: "https://sandbox.dpc.cms.gov/api/v1/Token/auth",

    // REQUIRED: The registered Client ID
    clientId: "W3sidiI6MiwibCI6Imh0dHBzOi8vc2FuZGJveC5kcGMuY21zLmdvdi9hcGkiLCJpIjoiZGViYzNhMTUtMTk1MS00MTVhLWJkZWUtMTNjYTUzYjBiM2ZiIiwiYyI6W3siaTY0IjoiWkhCalgyMWhZMkZ5YjI5dVgzWmxjbk5wYjI0Z1BTQXkifSx7Imk2NCI6IlpYaHdhWEpsY3lBOUlESXdNakV0TURVdE1UWlVNREU2TVRZNk5EZ3VNemd6TXpZM1dnIn0seyJpNjQiOiJiM0puWVc1cGVtRjBhVzl1WDJsa0lEMGdOREZoTnpZM01HSXRPV05rTnkwMFpXRXhMVGxrT1dRdE9HRmlOR1JqTWpKallqTTQifSx7ImwiOiJsb2NhbCIsImk2NCI6IkFxQ0JhSHFnZ1doNmV0cjJmRnRhalg2RWNNaUktUGUydkNGaWNNZjltal9Wcnp0OEJTWk1JNmwzeW5TMnhmaEZVdjR2UjJMVC05N0lsZ1Nub3VHZGV6M2k1WWJKWWIxaE8wQ01mTW1YM0pNSG5nMTV5aTZiMHpqVGp3d3dhdVJMTElYTHZYTENFc0Q0QUYxOTA5R2RGV0x1aV9sTGgzMHJ6VlVhUk04TDlOb0daVG9mWFRLWVFaUHVFMS1iLWJXTE93RkJKSFhPRHpsZ2J6RVdtZyIsInY2NCI6IkdQcWQ0R1VfUjF4OHJJZFpqNnBWc2JVck9rYjhpT1NCUEZMWmdub2FlT1k4VDdHUnhjbDdFa0tOdkw0RHdoNW9LUUF0RXdtV1kwbkhhVUxjWGFMOFREcUpWbElCY1ZlQyJ9XSwiczY0IjoiYlhadlVkMzBwSE8yLUZSdXZEVmNmMGFwemtxMndhSXdIaE5HMXRIZEZVOCJ9XQ==",
    
    // Set this to false to allow tests to accept self-signed certificates.
    strictSSL: true,

    requiresAuth: true,

    keyid: "de56ae6d-e42c-4738-81e6-c23009797cd1",

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
        "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\n" +
        "i6fVUblfƒ7pmo9mFukm89qUXz7WOvD4P1JDsl4Bnll5/L0UUjdifqNl0t2t4VGKEZ\n" +
        "oyy0lodf1O6SnjJcaZfkqeYwVz5LdfLZH9eaJa4fQEVWXlOheWmw0KCGTU1UaMs3\n" +
        "6BggEZXsMIBEBOTWbPYMdlHqSRTkhKl/AoIƒBAHa3F3kaFk+FVF+BIGiCnr9ZZf4K\n" +
        "hX7fdQ+4F/U519rtjX3DadGt3ORDdLbIUVEEgapc6VWibnDA6h5NgTew1IvLRO5r\n" +
        "AUznrUR9vT7BOqYYJdV02HEXYB+TW+rsw3xAhDPOQHB29MdvRV+a+deknxr+GLab\n" +
        "pPvL+dPLh0yippLmbPWiP6SKq3eKc8puGslY3DbuhbbZLIKKLZYli612I01MNFTn\n" +
        "K9ukq90is7N2AG6d1aD0+VmgIY1E/e0m05RJYVeUDUrkh6YFfgA/G5w0FvYa4uVP\n" +
        "gmJkeEhBG9GxvllxH2csWWJjRJhy4228JCAWvplI6L6M23/SNY+iXszLs58=\n" +
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
