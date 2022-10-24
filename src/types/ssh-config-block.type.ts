export type SSHConfigBlock = {
    value: string,
    config: {
        param: 'HostName' | 'IdentityFile' | 'Port' | 'User';
        value?: string;
    }[]
}[]