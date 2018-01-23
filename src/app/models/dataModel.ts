import { BlackBox } from "./blackbox";
import { Protocol } from "./protocol";
import { Time } from "./time";



export class DataModel {
    device_groups : BlackBox[];
    protocols : Protocol[];
    times : Time[];
}