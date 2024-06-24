import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x678E2ddAdaC99Ac8877517a7B33FC33749cB1455'
);

export default instance;
