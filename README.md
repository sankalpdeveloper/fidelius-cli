# FIDELIUS CLI

### Install Java

This Project Require Java Version 11 Please Do Not install java 17 it create issue in this package

You can install OpenJDK/JRE Here

👎👎👎

[🤜Download](https://www.openlogic.com/openjdk-downloads)🤛

👍👍👍

### I give Sample of How our package work


```javascript
const { decryptData, encryptData, getEcdhKeyMaterial } = require("..");

const requester = getEcdhKeyMaterial()
//  {
//     privateKey: 'AuuBSeYWwuMBZ7WArEdjhxv74DmJsuHdiYm5V+P/oe0=',
//     publicKey: 'BESv1we86J1HBUzZzQLfu5i0lHeec1TuqFXLrti9ao0gS2ppgr8DOc8UvlKdg2kq8Ege2VZBk7CYmxl6LXg7fwk=',
//     x509PublicKey: 'MIIBMTCB6gYHKoZIzj0CATCB3gIBATArBgcqhkjOPQEBAiB/////////////////////////////////////////7TBEBCAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqYSRShRAQge0Je0Je0Je0Je0Je0Je0Je0Je0Je0Je0JgtenHcQyGQEQQQqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq0kWiCuGaG4oIa04B7dLHdI0UySPU1+bXxhsinpxaJ+ztPZAiAQAAAAAAAAAAAAAAAAAAAAFN753qL3nNZYEmMaXPXT7QIBCANCAAREr9cHvOidRwVM2c0C37uYtJR3nnNU7qhVy67YvWqNIEtqaYK/AznPFL5SnYNpKvBIHtlWQZOwmJsZei14O38J',
//     nonce: 'PGye58BW5HfMRbj9eYRNXJQ1GF+5IV2Ybi2WQwjY2+k='
// }



const sender = getEcdhKeyMaterial()
//{
//     privateKey: 'BzQImueSZDvouzVYE1b0Vz9jHhzn8pdTSaAo4E9+dGQ=',
//     publicKey: 'BBuTzrkdae8fGLSQoGtcweumQHLfcJU381n3lO41lLK6RTDO3Q6ZWvvQQhlQ6lFtRpqsHS46ubs+4WtHor/dyJc=',
//     x509PublicKey: 'MIIBMTCB6gYHKoZIzj0CATCB3gIBATArBgcqhkjOPQEBAiB/////////////////////////////////////////7TBEBCAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqYSRShRAQge0Je0Je0Je0Je0Je0Je0Je0Je0Je0Je0JgtenHcQyGQEQQQqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq0kWiCuGaG4oIa04B7dLHdI0UySPU1+bXxhsinpxaJ+ztPZAiAQAAAAAAAAAAAAAAAAAAAAFN753qL3nNZYEmMaXPXT7QIBCANCAAQbk865HWnvHxi0kKBrXMHrpkBy33CVN/NZ95TuNZSyukUwzt0OmVr70EIZUOpRbUaarB0uOrm7PuFrR6K/3ciX',
//     nonce: 'G8cvJeM4VVXgBCM6FR0ae85qVqDEmX1gz5GxxWQ7ctM='
// }

const EncryptedData = encryptData(
    {
        stringToEncrypt: "Sample FHIR Document",
        senderNonce: sender.nonce,
        requesterNonce: requester.nonce,
        senderPrivateKey: sender.privateKey,
        requesterPublicKey: requester.publicKey,
    }
)

console.log("EncryptedData", EncryptedData);
// { encryptedData: 'LPM24zeK6taraTN6VnEw6KfRAphFQOQ+yckiZI9OZvugM9hA' }


const DecryptedData = decryptData(
    {
        encryptedData: EncryptedData.encryptedData,
        requesterNonce: requester.nonce,
        senderNonce: sender.nonce,
        requesterPrivateKey: requester.privateKey,
        senderPublicKey: sender.publicKey,
    }
)
console.log("DecryptedData", DecryptedData);
// { decryptedData: 'Sample FHIR Document' }
```

## Acknowledgement

The core logic for Fidelius CLI was excerpted (and improved upon) from [this project](https://github.com/mgrmtech/fidelius-cli). As mentioned there, the name Fidelius comes from [Fidelius Charm](https://harrypotter.fandom.com/wiki/Fidelius_Charm), a magic spell used to conceal secrets.
