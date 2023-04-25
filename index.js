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

const getEcdhKeyMaterial = () => {
	const result = execFideliusCli(["gkm"]);
	return result;
};

const encryptData = ({
	stringToEncrypt,
	senderNonce,
	requesterNonce,
	senderPrivateKey,
	requesterPublicKey,
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