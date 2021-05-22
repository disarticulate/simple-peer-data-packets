import SimplePeerDataPackets from './SimplePeerDataPackets'
export const wrapSimplePeer = (simplepeer, opts) => {
  return Object.assign(simplepeer, new SimplePeerDataPackets(opts))
}
export {
  SimplePeerDataPackets
}
export default wrapSimplePeer