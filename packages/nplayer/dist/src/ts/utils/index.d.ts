import { Disposable } from '../types';
import { DomListener, $, createSvg, getEventPath, removeNode, addClass } from './dom';
export * from './drag';
export * from './rect';
export * from './dom';
export * from './is';
export * from './env';
export * from './emitter';
export * from './component';
export * from './patch';
export declare function clamp(n: number, lower?: number, upper?: number): number;
export declare function getDisposableMap(): Map<any, Array<Disposable>>;
export declare function addDisposable<T extends Disposable>(key: any, disposable: T): T;
export declare function dispose(key: any): void;
export declare function addDisposableListener<K extends keyof GlobalEventHandlersEventMap>(key: any, node: EventTarget, type: K, handler: (event: GlobalEventHandlersEventMap[K]) => void, useCapture?: boolean): DomListener;
export declare function throttle(fn: Function, ctx?: any): any;
export declare function repeatStr(str: string, t: number): string;
export declare function formatTime(seconds: number): string;
export declare const internalUtils: {
    $: typeof $;
    clamp: typeof clamp;
    addDisposableListener: typeof addDisposableListener;
    addDisposable: typeof addDisposable;
    createSvg: typeof createSvg;
    dispose: typeof dispose;
    getEventPath: typeof getEventPath;
    removeNode: typeof removeNode;
    addClass: typeof addClass;
};
