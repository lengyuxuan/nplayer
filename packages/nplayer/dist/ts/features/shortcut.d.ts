import { Player } from '../player';
import type { Disposable } from '../types';
export type ShortcutHandler = (player: Player) => void;
export declare class Shortcut implements Disposable {
    private player;
    private map;
    constructor(player: Player, enable: boolean);
    private onKeyDown;
    register(keyCode: number, handler: ShortcutHandler): void;
    unregister(keyCode: number): boolean;
    dispose(): void;
    enable(): void;
    disable(): void;
}
