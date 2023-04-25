
export interface EntriesResponse {
    count:   number;
    entries: Entry[];
}

export interface Entry {
    API:         string;
    Description: string;
    Auth:        Auth;
    HTTPS:       boolean;
    Cors:        Cors;
    Link:        string;
    Category:    string;
}

export enum Auth {
    APIKey = "apiKey",
    Empty = "",
    OAuth = "OAuth",
    UserAgent = "User-Agent",
    XMashapeKey = "X-Mashape-Key",
}

export enum Cors {
    No = "no",
    Unknown = "unknown",
    Unkown = "unkown",
    Yes = "yes",
}