export interface Entries {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    EntriesHeaders;
    config:     Config;
    request:    string;
}

export interface Config {
    transitional:      Transitional;
    adapter:           string[];
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Env;
    headers:           ConfigHeaders;
    baseURL:           string;
    method:            string;
    url:               string;
}

export interface Env {
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
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

export interface EntriesHeaders {
    "content-type": string;
}