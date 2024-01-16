import type { Disposable, PlayerOptions, Plugin } from './types';
import { $, addClass, Rect, EventEmitter, clamp, dispose, removeNode, addDisposable } from './utils';
import { Control, type ControlItem } from './parts/control';
import { Loading } from './parts/loading';
import { ContextMenu, type ContextMenuItem } from './parts/contextmenu';
import { Toast } from './parts/toast';
import { Fullscreen } from './features/fullscreen';
import { WebFullscreen } from './features/web-fullscreen';
import { EVENT } from './constants';
import { Shortcut } from './features/shortcut';
import type { SettingItem } from './parts/control/items/setting';
import * as components from './components';
import { Poster } from './parts/poster';
import { Touch } from './features/touch';
export declare class Player extends EventEmitter implements Disposable {
    container: HTMLElement | null;
    el: HTMLElement;
    opts: Required<PlayerOptions>;
    mounted: boolean;
    private prevVolume;
    private readonly settingNamedMap;
    private readonly contextmenuNamedMap;
    private readonly controlNamedMap;
    readonly __settingItems: SettingItem[];
    readonly video: HTMLVideoElement;
    readonly rect: Rect;
    readonly fullscreen: Fullscreen;
    readonly webFullscreen: WebFullscreen;
    readonly shortcut: Shortcut;
    readonly touch: Touch;
    readonly control: Control;
    readonly loading: Loading;
    readonly poster: Poster;
    readonly contextmenu: ContextMenu;
    readonly toast: Toast;
    private readonly plugins;
    constructor(opts?: PlayerOptions);
    get currentTime(): number;
    set currentTime(v: number);
    get loaded(): boolean;
    get duration(): number;
    get buffered(): TimeRanges;
    get volume(): number;
    set volume(v: number);
    get muted(): boolean;
    set muted(v: boolean);
    get playbackRate(): number;
    set playbackRate(v: number);
    get ended(): boolean;
    get paused(): boolean;
    get playing(): boolean;
    get loop(): boolean;
    set loop(v: boolean);
    enableClickPause(): void;
    disableClickPause(): void;
    use(plugin: Plugin): this;
    mount(el?: PlayerOptions['container']): void;
    incVolume(v?: number): void;
    decVolume(v?: number): void;
    forward(v?: number): void;
    rewind(v?: number): void;
    play(): Promise<void> | void;
    pause(): void;
    seek(seconds: number): void;
    toggle: () => void;
    toggleVolume(): void;
    eachBuffer(fn: (start: number, end: number) => boolean | void): void;
    registerSettingItem(item: SettingItem, id?: string): void;
    registerContextMenuItem(item: ContextMenuItem, id?: string): void;
    registerControlItem(item: ControlItem, id?: string): void;
    getSettingItem(id: string): SettingItem | undefined;
    getContextMenuItem(id: string): ContextMenuItem | undefined;
    getControlItem(id: string): ControlItem | undefined;
    updateOptions(opts: PlayerOptions): void;
    updateControlItems(items: Parameters<Control['updateItems']>[0], index?: number): void;
    dispose(): void;
    static __utils: {
        $: typeof $;
        clamp: typeof clamp;
        addDisposableListener: typeof import("./utils").addDisposableListener;
        addDisposable: typeof addDisposable;
        createSvg: typeof import("./utils").createSvg;
        dispose: typeof dispose;
        getEventPath: typeof import("./utils").getEventPath;
        removeNode: typeof removeNode;
        addClass: typeof addClass;
    };
    static EVENT: {
        readonly ENTER_FULLSCREEN: "EnterFullscreen";
        readonly EXIT_FULLSCREEN: "ExitFullscreen";
        readonly WEB_ENTER_FULLSCREEN: "WebEnterFullscreen";
        readonly WEB_EXIT_FULLSCREEN: "WebExitFullscreen";
        readonly DURATION_CHANGE: "DurationChange";
        readonly RATE_CHANGE: "RateChange";
        readonly AFTER_INIT: "AfterInit";
        readonly PLAY: "Play";
        readonly PAUSE: "Pause";
        readonly ENDED: "Ended";
        readonly WAITING: "Waiting";
        readonly STALLED: "Stalled";
        readonly CANPLAY: "Canplay";
        readonly LOADED_METADATA: "LoadedMetadata";
        readonly ERROR: "Error";
        readonly SEEKED: "Seeked";
        readonly TIME_UPDATE: "TimeUpdate";
        readonly VOLUME_CHANGE: "VolumeChange";
        readonly PROGRESS: "Progress";
        readonly ENTER_PIP: "EnterPip";
        readonly EXIT_PIP: "ExitPip";
        readonly LOADING_SHOW: "LoadingShow";
        readonly LOADING_HIDE: "LoadingHide";
        readonly MOUNTED: "Mounted";
        readonly UPDATE_SIZE: "UpdateSize";
        readonly BEFORE_DISPOSE: "BeforeDispose";
        readonly UPDATE_OPTIONS: "UpdateOptions";
        readonly OPEN_EDGE: "OpenEdge";
        readonly CONTROL_SHOW: "ControlShow";
        readonly CONTROL_HIDE: "ControlHide";
        readonly CONTROL_ITEM_UPDATE: "ControlItemUpdate";
        readonly BP_CHANGE: "BpChange";
    };
    static I18n: {
        defaultLang: string;
        currentLang: string;
        t(key: string, lang?: string | undefined): string;
        add(lang: string, transData: Record<string, string>): void;
        fallback(): void;
        setCurrentLang(lang?: string | undefined): void;
        setDefaultLang(lang?: string | undefined): void;
    };
    static Icon: {
        register: (iconName: string, icon: (cls?: string | undefined) => any) => void;
    } & {
        [key: string]: <T extends Element>(cls?: string | undefined) => T;
    };
    static components: typeof components;
    static Player: typeof Player;
    Player: typeof Player;
    EVENT: typeof EVENT;
}
export { Component } from './utils/component';
