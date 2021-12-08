const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.ada;

// General metadata for Ethereum
const namePrefix = "ADA MINIONS";
const description = "ADA MINIONS are cute little robots that helped out clean up the space debris around the moon";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const adaMetadata = {
  "721": {
    "##policyID##": {
      "adaminions": {
        "name": "ADA MINIONS",
        "image": "ipfs://Qmc7DA1KS3TBCew9ELgctCFYe7o9HXWLqLb3yXuvJm5sG3",
        "nsfw": "False",
        "copyright": "Copyright @2021",
        "version": "1.0",
        "id": "1",
        "collection": "ADA MINIONS",
        "url": "https://www.adaminions.com/",
        "twitter": "https://twitter.com/ada_minions/",
        "instagram": "https://www.instagram.com/ada_minions/"
      }
    }
  }
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 2500,
    layersOrder: [
      { name: "bg2" },
      { name: "bg1" },
      { name: "shadow" },
      { name: "botskin" },
      { name: "inter_face" },
      { name: "ears" },
      { name: "headwear" }
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2400,
  height: 2400,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 4 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  adaMetadata,
  gif,
  preview_gif,
};
