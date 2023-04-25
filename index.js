const path = require("path");
const { execSync } = require("child_process");

const binPath = path.join(
	__dirname,
	`/fidelius-cli-1.2.0/bin/fidelius-cli`
);

const execFideliusCli = (args) => {
	const execOptions = { encoding: "utf-8" };
	const fideliusCommand = `${binPath} ${args.join(" ")}`;
	const result = execSync(fideliusCommand, execOptions);
	try {
		return JSON.parse(result.replace(/(\r\n|\n|\r)/gm, ""));
	} catch (error) {
		console.error(
			`ERROR · execFideliusCli · Command: ${args.join(" ")}\n${result}`
		);
	}
};
/**
 * Function to getEcdhKeyMaterial
 * @returns
 */
const getEcdhKeyMaterial = () => {
	const result = execFideliusCli(["gkm"]);
	return result;
};


/**
 * Function to encrypt using HIU's public key and nonce and HIP's private key and nonse
 * @param {Object} EncryptionParams
 * @param {String} EncryptionParams.stringToEncrypt 
 * @param {String} EncryptionParams.senderNonce 
 * @param {String} EncryptionParams.requesterNonce 
 * @param {String} EncryptionParams.senderPrivateKey 
 * @param {String} EncryptionParams.requesterPublicKey 
 * @returns
 */
const encryptData = ({
	stringToEncrypt,
	senderNonce,
	requesterNonce,
	senderPrivateKey,
	requesterPublicKey
}) => {
	const result = execFideliusCli([
		"e",
		stringToEncrypt = JSON.stringify(stringToEncrypt),
		senderNonce,
		requesterNonce,
		senderPrivateKey,
		requesterPublicKey]);

	return result;
};

/**
 * Function to decrypt using HIP's private key and nonce and HIP's public key and nonse
 * @param {Object} DecryptionParams
 * @param {String} DecryptionParams.encryptedData 
 * @param {String} DecryptionParams.requesterNonce 
 * @param {String} DecryptionParams.senderNonce 
 * @param {String} DecryptionParams.requesterPrivateKey 
 * @param {String} DecryptionParams.senderPublicKey 
 * @returns
 */
const decryptData = ({
	encryptedData,
	requesterNonce,
	senderNonce,
	requesterPrivateKey,
	senderPublicKey,
}) => {

	const result = execFideliusCli([
		"d",
		encryptedData,
		requesterNonce,
		senderNonce,
		requesterPrivateKey,
		senderPublicKey]);

	return result;
};


module.exports = { encryptData, decryptData, getEcdhKeyMaterial }