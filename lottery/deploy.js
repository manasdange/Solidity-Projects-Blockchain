const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
	"snow key material weather romance donate flavor phone pipe mercy desk audit",
	"https://rinkeby.infura.io/v3/1da6470872d04779a28ba7f521d9fde0"
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log("attempting to deploy from account: ", accounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode })
		.send({ gas: "1000000", from: accounts[0] });
	console.log(interface);
	console.log("contract deployed to: ", result.options.address);
};
deploy();
