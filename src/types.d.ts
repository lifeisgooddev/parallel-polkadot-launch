interface LaunchConfig {
  relaychain: RelayChainConfig;
  parachains: ParachainConfig[];
  simpleParachains: SimpleParachainConfig[];
  hrmpChannels: HrmpChannelsConfig[];
  types: any;
}
interface ParachainConfig {
  bin: string;
  id: string;
  rpcPort: number;
  wsPort: number;
  port: number;
  balance: string;
  flags: string[];
  chain?: string;
}
interface SimpleParachainConfig {
  bin: string;
  id: string;
  port: string;
  balance: string;
}
interface HrmpChannelsConfig {
  sender:number;
  recipient: number;
  maxCapacity: number;
  maxMessageSize: number;
}
interface RelayChainConfig {
  bin: string;
  chain: string;
  nodes: {
    name: string;
    wsPort: number;
    port: number;
    flags?: string[];
  }[];
}

interface ChainSpec {
  name: string;
  id: string;
  chainType: string;
  bootNodes: string[];
  telemetryEndpoints: null;
  protocolId: string;
  properties: null;
  forkBlocks: null;
  badBlocks: null;
  consensusEngine: null;
  lightSyncState: null;
  genesis: {
    runtime: any;// this can change depending on the versions
    raw: {
      top: {
        [key: string]: string;
      };
    };
  };
}
