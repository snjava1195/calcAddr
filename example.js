import { Address, ProviderRpcClient, TvmException } from 'everscale-inpage-provider';
import { SimpleKeystore } from 'everscale-standalone-client/nodejs.js'
// For browser environment:
//import { EverscaleStandaloneClient } from 'everscale-standalone-client';
// Or for nodejs environment:
 import { EverscaleStandaloneClient } from "everscale-standalone-client/nodejs.js";
import { deriveBip39Phrase } from "everscale-crypto";
const ever = new ProviderRpcClient({
  fallback: () =>
    EverscaleStandaloneClient.create({
      connection: 'testnet',
    }),
});

async function myApp() {
  await ever.ensureInitialized();

  await ever.requestPermissions({
    permissions: ['basic'],
  });
const _randomNonce = 1;
 // const airdropTokenWalletAddress = new Address('0:24cc7e134579e523a78d505974ca46624fbe2a7d3baae5fca3b7f9dc4bd13e74');
const expectedAddress = await ever.getExpectedAddress(AirdropFactoryAbi, {initParams: { _randomNonce }, publicKey: "2a67f08b3a1b919befc043b10b33512a1848b75f02c13a09b6b1fee0223199f9", tvc: "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"  });

console.log(`${expectedAddress}`);

const contract = new ever.Contract(AirdropFactoryAbi, expectedAddress);
	
    const stateInit = await ever.getStateInit(AirdropFactoryAbi, {initParams: { _randomNonce }, publicKey: "2a67f08b3a1b919befc043b10b33512a1848b75f02c13a09b6b1fee0223199f9", tvc: "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"  });
    
    const keystore = new SimpleKeystore({["0"]: "2a67f08b3a1b919befc043b10b33512a1848b75f02c13a09b6b1fee0223199f9"});
    
    console.log(keystore.getSigner("0"));
   // const tx = await  contract.methods.constructor({_token:"0:a49cd4e158a9a15555e624759e2e4e766d22600b7800d891e46f9291f044a93d", _owner:"0:102cf118b6875d201a3011d5dc17a358ee4d4333ad7e167824515171ed8f6f63", _start_timestamp: 60, _claim_period_in_seconds: 60, _claim_periods_amount: 3}).sendExternal({
      //  stateInit: stateInit.stateInit,
       // publicKey: "2a67f08b3a1b919befc043b10b33512a1848b75f02c13a09b6b1fee0223199f9",
      //})



}


const AirdropFactoryAbi = {
  'ABI version': 2,
  header: ['pubkey', 'time', 'expire'],
  functions: [
    {
	name: 'constructor',
			inputs: [
				{name:'_token',type:'address'},
				{name:'_owner',type:'address'},
				{name:'_start_timestamp',type:'uint32'},
				{name:'_claim_period_in_seconds',type:'uint32'},
				{name:'_claim_periods_amount',type:'uint32'}
			],
			outputs: [
			]
    },
    {
      name: 'getDetails',
      inputs: [],
      outputs: [
      {name: '_token', type: 'address'},
      {name: '_token_wallet', type: 'address'},
      {name: '_claim_required_value', type: 'uint128'},
      {name: '_transferred_count', type: 'uint128'},
      {name: '_start_timestamp', type: 'uint32'},
      {name: '_claim_period_in_seconds', type: 'uint32'},
      {name: '_claim_periods_amount', type: 'uint32'},
      {components:[{name:'start',type:'uint32'},{name:'end',type:'uint32'},{name:'id',type:'uint32'}],name:'_periods',type:'tuple[]'}
			]
		},
		],
      
     
    
	data: [
	{key:1,name:'_randomNonce',type:'uint256'}
	],
	events: [
	],
}; 
myApp().catch(console.error);
