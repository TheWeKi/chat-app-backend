import Redis from "ioredis";

const pub = new Redis("redis://localhost:6379");
const sub = pub.duplicate();

export { pub, sub };