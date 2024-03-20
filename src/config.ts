export const cluster = process.env.CLUSTER || "devnet"
const devnetRpc = process.env.DEVNET_SOLANA_RPC || "https://api.devnet.solana.com"
const mainnetRpc = process.env.MAINNET_SOLANA_RPC || "https://api.mainnet-beta.com"

export const rpc = cluster === "devnet" ? devnetRpc : mainnetRpc