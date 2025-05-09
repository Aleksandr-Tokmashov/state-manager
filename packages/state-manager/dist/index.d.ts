type Listener<T> = (state: T) => void;
export declare class Store<T> {
    private state;
    private listeners;
    constructor(initialState: T);
    getState(): T;
    updateState(updater: (prevState: T) => T): void;
    subscribe(listener: Listener<T>): () => void;
    private unsubscribe;
    private notifyListeners;
}
export {};
