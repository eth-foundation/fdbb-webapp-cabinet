var com = {
	getPrice: function (fn) {
		ethers.providers.getDefaultProvider('mainnet').getEtherPrice().then(function(data){
			fn(data);
		})
	},
	createWallet: ethers.Wallet.createRandom,

};
