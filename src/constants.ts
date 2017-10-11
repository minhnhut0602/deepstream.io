export enum LOG_LEVEL {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    OFF = 100
}

export enum STATES {
    STOPPED,
    LOGGER_INIT,
    PLUGIN_INIT,
    SERVICE_INIT,
    CONNECTION_ENDPOINT_INIT,
    RUNNING,
    CONNECTION_ENDPOINT_SHUTDOWN,
    SERVICE_SHUTDOWN,
    PLUGIN_SHUTDOWN,
    LOGGER_SHUTDOWN
}

export enum EVENT {
    DEPRECATED,
    TRIGGER_EVENT,
    INCOMING_CONNECTION,
    INFO,
    SUBSCRIBE,
    UNSUBSCRIBE,
    RECORD_DELETION,
    INVALID_AUTH_MSG,
    INVALID_AUTH_DATA,
    AUTH_ATTEMPT,
    AUTH_ERROR,
    TOO_MANY_AUTH_ATTEMPTS,
    AUTH_SUCCESSFUL,
    CONNECTION_ERROR,
    MESSAGE_PERMISSION_ERROR,
    MESSAGE_PARSE_ERROR,
    MAXIMUM_MESSAGE_SIZE_EXCEEDED,
    MESSAGE_DENIED,
    INVALID_MESSAGE_DATA,
    CONNECTION_AUTHENTICATION_TIMEOUT,
    UNKNOWN_TOPIC,
    UNKNOWN_ACTION,
    MULTIPLE_SUBSCRIPTIONS,
    NOT_SUBSCRIBED,
    ACK_TIMEOUT,
    RESPONSE_TIMEOUT,
    MULTIPLE_ACK,
    MULTIPLE_RESPONSE,
    NO_RPC_PROVIDER,
    INVALID_RPC_CORRELATION_ID,
    RECORD_LOAD_ERROR,
    RECORD_CREATE_ERROR,
    RECORD_UPDATE_ERROR,
    RECORD_DELETE_ERROR,
    RECORD_SNAPSHOT_ERROR,
    RECORD_NOT_FOUND,
    CACHE_RETRIEVAL_TIMEOUT,
    STORAGE_RETRIEVAL_TIMEOUT,
    CLOSED_SOCKET_INTERACTION,
    CLIENT_DISCONNECTED,
    INVALID_MESSAGE,
    VERSION_EXISTS,
    INVALID_VERSION,
    PLUGIN_ERROR,
    PLUGIN_INITIALIZATION_ERROR,
    PLUGIN_INITIALIZATION_TIMEOUT,
    TIMEOUT,
    LEADING_LISTEN,
    LOCAL_LISTEN,
    UNSOLICITED_MSGBUS_MESSAGE,
    INVALID_MSGBUS_MESSAGE,
    INVALID_CONFIG_DATA,
    INVALID_PRESENCE_USERS,
    INVALID_STATE_TRANSITION,
    INVALID_PATCH_ON_HOTPATH
}

export enum TOPIC {
    CONNECTION = 0x00,
    AUTH = 0x01,
    ERROR = 0x02,
    EVENT = 0x04,
    RECORD = 0x05,
    RPC = 0x06,
    PRESENCE = 0x07,

    SUBSCRIPTIONS = 0x10,
    ONLINE_USERS = 0x11,

    EVENT_SUBSCRIPTIONS = 0x20,
    RECORD_SUBSCRIPTIONS = 0x21,
    RPC_SUBSCRIPTIONS = 0x22,
    PRESENCE_SUBSCRIPTIONS = 0x23,
    RECORD_LISTEN_PATTERNS = 0x24,
    EVENT_LISTEN_PATTERNS = 0x25,
    RECORD_PUBLISHED_SUBSCRIPTIONS = 0x26,
    EVENT_PUBLISHED_SUBSCRIPTIONS = 0x27,
    RECORD_LISTENING = 0x28,
    EVENT_LISTENING = 0x29
}

export enum CONNECTION_ACTIONS {
    ERROR = 0x00,
    PING = 0x01,
    PONG = 0x02,
    ACK = 0x03,
    CHALLENGE = 0x04,
    CHALLENGE_RESPONSE = 0x05,
    REJECTION = 0x06
}

export enum AUTH_ACTIONS {
    ERROR = 0x00,
    REQUEST = 0x01,
    AUTH_SUCCESFUL = 0x02,
    INVALID_AUTH_DATA = 0x03,
    TOO_MANY_AUTH_ATTEMPTS = 0x04
}

export enum EVENT_ACTIONS {
    ERROR = 0x00,
    EMIT = 0x01,
    SUBSCRIBE = 0x02,
    SUBSCRIBE_ACK = 0x03,
    UNSUBSCRIBE = 0x04,
    UNSUBSCRIBE_ACK = 0x05,
    LISTEN = 0x06,
    LISTEN_ACK = 0x07,
    UNLISTEN = 0x08,
    UNLISTEN_ACK = 0x09,
    LISTEN_ACCEPT = 0x0A,
    LISTEN_REJECT = 0x0B,
    SUBSCRIPTIONS_FOR_PATTERN_FOUND = 0x0C,
    SUBSCRIPTION_FOR_PATTERN_FOUND = 0x0D,
    SUBSCRIPTION_FOR_PATTERN_REMOVED = 0x0E
}

export enum RECORD_ACTIONS {
    ERROR = 0x00,
    CREATE = 0x01,
    READ = 0x02,
    READ_RESPONSE = 0x03,
    HEAD = 0x04,
    HEAD_RESPONSE = 0x05,
    CREATEANDUPDATE = 0x06,
    CREATEANDUPDATE_WITH_WRITE_ACK = 0x07,
    CREATEANDPATCH = 0x08,
    CREATEANDPATCH_WITH_WRITE_ACK = 0x09,
    UPDATE = 0x0A,
    UPDATE_WITH_WRITE_ACK = 0x0C,
    PATCH = 0x0D,
    PATCH_WITH_WRITE_ACK = 0x0E,
    ERASE = 0x0F,
    ERASE_WITH_WRITE_ACK = 0x10,
    WRITE_ACKNOWLEDGEMENT = 0x11,
    DELETE = 0x12,
    DELETE_ACK = 0x13,
    SUBSCRIBEANDHEAD = 0x20,
    SUBSCRIBEANDHEAD_RESPONSE = 0x21,
    SUBSCRIBEANDREAD = 0x22,
    SUBSCRIBEANDREAD_RESPONSE = 0x23,
    SUBSCRIBECREATEANDREAD = 0x24,
    SUBSCRIBECREATEANDREAD_RESPONSE = 0x25,
    SUBSCRIBECREATEANDUPDATE = 0x26,
    SUBSCRIBECREATEANDUPDATE_RESPONSE = 0x27,
    SUBSCRIBE = 0x28,
    SUBSCRIBE_ACK = 0x29,
    UNSUBSCRIBE = 0x2A,
    UNSUBSCRIBE_ACK = 0x2B,
    LISTEN = 0x30,
    LISTEN_ACK = 0x31,
    UNLISTEN = 0x32,
    UNLISTEN_ACK = 0x33,
    LISTEN_ACCEPT = 0x34,
    LISTEN_REJECT = 0x35,
    SUBSCRIPTION_HAS_PROVIDER = 0x36,
    SUBSCRIPTIONS_FOR_PATTERN_FOUND = 0x37,
    SUBSCRIPTION_FOR_PATTERN_FOUND = 0x38,
    SUBSCRIPTION_FOR_PATTERN_REMOVED = 0x39,
    CACHE_RETRIEVAL_TIMEOUT = 0x40,
    STORAGE_RETRIEVAL_TIMEOUT = 0x41,
    VERSION_EXISTS = 0x42,

    // Deprecated
    HAS = 0xF0,
    HAS_RESPONSE = 0xF1
}

export enum RPC_ACTIONS {
    ERROR = 0x00,
    REQUEST = 0x01,
    ACCEPT = 0x02,
    RESPONSE = 0x03,
    REJECT = 0x04,
    PROVIDE = 0x05,
    PROVIDE_ACK = 0x06,
    UNPROVIDE = 0x07,
    UNPROVIDE_ACK = 0x08,
    NO_RPC_PROVIDER = 0x09,
    RPC_TIMEOUT = 0x0A,
    ACCEPT_TIMEOUT = 0x0B
}

export enum PRESENCE_ACTIONS {
    ERROR = 0x00,
    QUERY_ALL = 0x01,
    QUERY_ALL_RESPONSE = 0x02,
    QUERY = 0x03,
    QUERY_RESPONSE = 0x04,
    PRESENCE_JOIN = 0x05,
    PRESENCE_LEAVE = 0x06,
    SUBSCRIBE = 0x07,
    SUBSCRIBE_ACK = 0x08,
    UNSUBSCRIBE = 0x09,
    UNSUBSCRIBE_ACK = 0x0A,
    EVERYONE = 0xFF
}

export enum PAYLOAD_ENCODING {
    JSON = 0x00,
    DEEPSTREAM = 0x01
}