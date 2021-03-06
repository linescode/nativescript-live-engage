export interface CommonLiveEngage {
    initializeChat(brandId: string, appId: string): void;
    enableLogging(logLevel: number): void;
    showChat(): void;
    closeChat(): void;
    setUserProfileValues(chatProfile: ChatProfile): void;
    setAuthenticationCode(jwt: string): void;
    getUnreadMessagesCount(): Promise<number>;
    registerPushToken(token: any, delegate?: any): void;
    unregisterPushToken(): void;
    handlePushMessage(data: any, image?: any, showNotification?: boolean): void;
    parsePushMessage(data: any): any;
    killChat(): Promise<boolean>;
}
export interface ChatProfile {
    firstName: string;
    lastName: string;
    nickName: string;
    phone: string;
    avatarUrl: string;
}
